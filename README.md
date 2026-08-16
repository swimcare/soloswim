# SoloSwim

Webshop voor waterproof zwemschema’s ([soloswim.be](https://www.soloswim.be)).

**Stack:** Next.js 15 (Pages Router), React 18, Redux, Stripe Checkout, MongoDB, Mailgun, Tailwind CSS.

---

## Vereisten

- Node.js 22+ (lokaal ontwikkelen)
- Docker + Docker Compose (productie)
- Extern Docker-netwerk `proxy` (nginx-proxy / Let’s Encrypt op de server)

---

## Lokale ontwikkeling

```bash
cp .env.example .env
# Vul minstens HOST, Stripe test keys en (optioneel) Mailgun/Mongo in

npm install
npm run dev
```

Site: [http://localhost:3000](http://localhost:3000)

Stripe webhooks lokaal doorsturen:

```bash
npm run stripe:listen
# of: stripe listen --forward-to localhost:3000/api/webhook
```

Gebruik dan de `whsec_...` die de Stripe CLI toont als `STRIPE_WEBHOOK_SECRET`.

---

## Environment variables

Secrets horen **alleen** in `.env` op de server (of lokaal). Nooit in de Dockerfile bakken.

Waarden **zonder spaties** mogen zonder quotes (`HOST=https://www.soloswim.be`).  
Waarden **met spaties of `< >`** wél tussen dubbele quotes zetten, anders knipt Docker/Compose ze af:

```bash
MAILGUN_FROM="SoloSwim <postmaster@mg.swimcare.be>"
MAILGUN_ORDER_TEMPLATE="soloswim bedankt voor je bestelling"
```

Zie `.env.example` voor het volledige overzicht. Belangrijkste:

| Variabele | Waarvoor |
|---|---|
| `HOST` | Publieke URL zonder trailing slash, bv. `https://www.soloswim.be` |
| `STRIPE_SECRET_KEY` | Server-side Stripe key |
| `STRIPE_WEBHOOK_SECRET` | Signing secret van endpoint `/api/webhook` |
| `MAILGUN_API_KEY` | Mailgun API key |
| `MAILGUN_DOMAIN` | Verified Mailgun domain, bv. `mg.swimcare.be` |
| `MAILGUN_API_URL` | EU: `https://api.eu.mailgun.net` |
| `MAILGUN_FROM` | Afzender, bv. `SoloSwim <postmaster@mg.swimcare.be>` (moet op Mailgun-domein blijven i.v.m. SPF) |
| `MAILGUN_REPLY_TO` | Antwoordadres voor klantmails, bv. `info@soloswim.be` |
| `MAILGUN_ORDER_TEMPLATE` | Exacte templatenaam, bv. `soloswim bedankt voor je bestelling` |
| `MAILGUN_ORDER_BCC` | Kopie ordermail (SoloSwim) |
| `MAILGUN_CONTACT_TO` | Ontvanger(s) contactformulier (komma-gescheiden), bv. `info@soloswim.be,kristof@soloswim.be` |
| `MONGODB_URL` | Wordt in Compose overschreven naar `mongodb://mongo:27017/soloswim` |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS` | Optioneel; bij image-build als build-arg meegeven |
| `INTERNAL_API_SECRET` | Optioneel; beschermt handmatige POST naar interne order/mail API’s |

### Mailgun orderbevestiging

- Templatenaam: `MAILGUN_ORDER_TEMPLATE` (exact zoals in Mailgun)
- BCC naar SoloSwim: via `MAILGUN_ORDER_BCC` (standaard `kristof@soloswim.be`) — **niet** in de template zetten, dat doet de API al

#### Templatevariabelen (Handlebars)

**Klant**

| Parameter | Voorbeeld | Tip |
|---|---|---|
| `{{voornaam}}` | Kristof | Aanhef: `Beste {{voornaam}},` |
| `{{familienaam}}` | Ryheul | Optioneel |
| `{{name}}` | Kristof Ryheul | Volledige naam |

**Order**

| Parameter | Voorbeeld |
|---|---|
| `{{order_number}}` | 6483-949220-4478 |
| `{{order_date}}` | 15/08/2026 |
| `{{subject}}` | Bedankt voor je bestelling Kristof Ryheul |

**Bedragen** (string met 2 decimalen; euroteken zelf in de template zetten)

| Parameter | Voorbeeld |
|---|---|
| `{{subtotal}}` | 17.99 |
| `{{shipping}}` | 5.99 |
| `{{total}}` | 23.98 |

**Verzendadres**

| Parameter | Voorbeeld |
|---|---|
| `{{line1}}` | Watersnipstraat 29 |
| `{{line2}}` | (vaak leeg) |
| `{{postal_code}}` | 8020 |
| `{{city}}` | Oostkamp |
| `{{country}}` | BE |

**Producten**

```handlebars
{{#each products}}
• {{name}}{{#if type}} – {{type}}{{/if}}{{#if editie}} (editie {{editie}}){{/if}} — €{{price}}
{{/each}}
```

Per product: `{{id}}`, `{{name}}`, `{{price}}`, `{{type}}`, `{{editie}}`

#### Voorbeeldtemplate

```handlebars
Beste {{voornaam}},

Bedankt voor je bestelling bij SoloSwim.

Ordernummer: {{order_number}}
Datum: {{order_date}}

Je bestelling:
{{#each products}}
• {{name}}{{#if type}} – {{type}}{{/if}} — €{{price}}
{{/each}}

Subtotaal: €{{subtotal}}
Verzending: €{{shipping}}
Totaal: €{{total}}

Verzenden naar:
{{name}}
{{line1}}
{{#if line2}}{{line2}}
{{/if}}{{postal_code}} {{city}}
{{country}}

We verwerken je bestelling zo snel mogelijk.
Vragen? Mail ons via info@soloswim.be.

Team SoloSwim
```

---

## Docker image bouwen

Op de build-machine / CI / server:

```bash
# Optioneel: GA mee in de client bundle
docker build \
  --build-arg NEXT_PUBLIC_GOOGLE_ANALYTICS=G-XXXXXXXX \
  -t swimcare/soloswim:latest \
  .
```

Image pushen (als je een registry gebruikt):

```bash
docker push swimcare/soloswim:latest
```

> Stripe-, Mailgun- en Mongo-secrets zitten **niet** in de image. Die komen via `env_file: .env` bij het starten.

---

## Online zetten (productie)

Op de Docker-server, in de map met `docker-compose.yml` en `.env`:

1. Zorg dat netwerk `proxy` bestaat (nginx-proxy).
2. Zet een geldige `.env` neer (op basis van `.env.example`).
3. Image beschikbaar maken (`docker pull` of lokaal `docker build`).
4. Starten:

```bash
docker compose up -d
```

Services:

| Container | Rol |
|---|---|
| `soloswim` | Next.js app (poort host `2379` → container `3000`) |
| `soloswim-mongo` | MongoDB 7, alleen op intern Docker-netwerk |

Herstarten na env-wijziging:

```bash
docker compose up -d --force-recreate soloswim
```

Logs bekijken:

```bash
docker compose logs -f soloswim
docker compose logs -f mongo
```

### Stripe webhook (productie)

In Stripe Dashboard → **Developers → Webhooks**:

- Endpoint URL: `https://www.soloswim.be/api/webhook`
- Event: `checkout.session.completed`
- Signing secret → `STRIPE_WEBHOOK_SECRET` in `.env`

Na een mislukte delivery kun je in Stripe op **Resend** klikken.

### Checkout-flow (kort)

1. Klant rekent af → `/api/create-checkout-session` → Stripe Checkout  
2. Betaling ok → Stripe POST naar `/api/webhook`  
3. Webhook: order in MongoDB + Mailgun template naar koper (+ BCC SoloSwim)  
4. Zapier (apart, rechtstreeks op Stripe) blijft factuur/Sendcloud doen  

---

## MongoDB: bestellingen opvragen via CLI

Mongo staat **niet publiek** op internet. Alleen bereikbaar vanaf de server / Docker-netwerk.

### Shell openen

```bash
docker exec -it soloswim-mongo mongosh soloswim
```

### Handige queries

```javascript
// Aantal orders
db.orders.countDocuments()

// Laatste 10 bestellingen
db.orders.find().sort({ _id: -1 }).limit(10)

// Compact overzicht
db.orders.find({}, {
  order_number: 1,
  order_date: 1,
  name: 1,
  email: 1,
  total: 1,
  _id: 0
}).sort({ _id: -1 }).limit(20)

// Zoeken op ordernummer
db.orders.findOne({ order_number: "6483-949220-4478" })

// Zoeken op e-mail
db.orders.find({ email: "klant@example.com" })

// Producten binnen een order tonen
db.orders.findOne(
  { order_number: "6483-949220-4478" },
  { products: 1, name: 1, total: 1, _id: 0 }
)
```

Pretty-print:

```javascript
db.orders.find().sort({ _id: -1 }).limit(5).pretty()
```

### One-liners vanaf de host (zonder interactieve shell)

```bash
# Laatste 5 orders (JSON)
docker exec soloswim-mongo mongosh soloswim --quiet --eval \
  'JSON.stringify(db.orders.find().sort({_id:-1}).limit(5).toArray(), null, 2)'

# Specifiek ordernummer
docker exec soloswim-mongo mongosh soloswim --quiet --eval \
  'JSON.stringify(db.orders.findOne({order_number:"6483-949220-4478"}), null, 2)'
```

### Backup (aanbevolen)

```bash
# Dump naar map op de host
docker exec soloswim-mongo mongodump --db=soloswim --out=/tmp/soloswim-dump
docker cp soloswim-mongo:/tmp/soloswim-dump ./backups/soloswim-$(date +%F)
```

Data blijft bewaard in Docker volume `soloswim_mongo_data`.

---

## Producten beheren

Producten staan als Markdown in `/products`. Na toevoegen/wijzigen: opnieuw **image bouwen en deployen** (statische generatie bij `next build`).

---

## Troubleshooting

| Symptoom | Check |
|---|---|
| `Webhook not configured` | `STRIPE_WEBHOOK_SECRET` in container: `docker exec soloswim printenv STRIPE_WEBHOOK_SECRET` |
| Stripe webhook **timeout** | Webhook antwoordt na Mongo-save; mail gaat async. Check of Mongo snel reageert (`docker compose logs mongo`) en Mailgun-logs op de app |
| Checkout start niet | `STRIPE_SECRET_KEY` + `HOST` in `.env`; app-logs |
| Geen ordermail | Mailgun env + templatenaam; logs op `Mailgun order confirmation` / `Webhook: email` |
| Contactformulier “verzonden” maar geen mail | Check `MAILGUN_CONTACT_TO` (default `info@soloswim.be`). Logs: `Contact notify accepted`. Bevestiging naar de bezoeker: `Contact confirmation accepted`. In Mailgun → Sending → Logs. |
| `getaddrinfo EAI_AGAIN mongo` / order persistence failed | App kan hostname `mongo` niet resolven. Zie hieronder “Mongo DNS”. |
| Order niet in DB | Mongo draait? `docker compose ps`; webhook-logs op `order stored` |
| Winkelwagen leeg na refresh | Cart zit in `localStorage` (`soloswim-basket`); na succesvolle betaling wordt die geleegd |

Env in de draaiende container controleren (geen secrets delen):

```bash
docker exec soloswim printenv HOST
docker exec soloswim printenv MAILGUN_DOMAIN
docker exec soloswim printenv MONGODB_URL
```

### Mailgun 401 (`Unauthorized` / `Forbidden`)

Dit is **geen** frontendfout. Mailgun weigert de API-key.

```bash
# In ~/docker/soloswim — check of vars in de container zitten (key niet plakken in chats)
docker exec soloswim printenv MAILGUN_API_URL
docker exec soloswim printenv MAILGUN_DOMAIN
docker exec soloswim sh -c 'echo "key length: ${#MAILGUN_API_KEY}"'

# Snelle auth-test vanuit de container (vervang KEY niet in chat-output)
docker exec soloswim sh -c 'curl -sS -u "api:${MAILGUN_API_KEY}" \
  "${MAILGUN_API_URL}/v3/domains/${MAILGUN_DOMAIN}" | head -c 400; echo'
```

- `key length: 0` → `MAILGUN_API_KEY` ontbreekt in `.env` of container niet herstart na edit  
- JSON met `"message": "Unauthorized"` / Forbidden → verkeerde key of verkeerde `MAILGUN_API_URL` (EU vs US)  
- Geldige domain-JSON → key OK; daarna contactformulier opnieuw proberen  

Private key ophalen in Mailgun → Settings → API Keys. Voor `mg.swimcare.be` (EU): `MAILGUN_API_URL=https://api.eu.mailgun.net`. Na `.env` wijzigen: `docker compose up -d --force-recreate soloswim`.

### Mongo DNS (`getaddrinfo EAI_AGAIN mongo`)

```bash
cd ~/docker/soloswim
docker compose ps
docker exec soloswim getent hosts mongo || docker exec soloswim nslookup mongo
docker exec soloswim-mongo mongosh --quiet --eval "db.adminCommand('ping')"
```

Als `mongo` niet resolved of `soloswim-mongo` niet `Up` is:

```bash
docker compose up -d
docker compose ps
```

Beide services moeten op hetzelfde netwerk staan (`proxy`) en `MONGODB_URL` moet `mongodb://mongo:27017/soloswim` zijn.
