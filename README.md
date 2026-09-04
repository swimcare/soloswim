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
| `MAILGUN_ORDER_BCC` | Kopie ordermail (SoloSwim), bv. `kristof@soloswim.be` |
| `TRUSTPILOT_AFS_BCC` | Uniek Trustpilot AFS-adres (BCC op ordermail → automatische reviewuitnodiging) |
| `MAILGUN_CONTACT_TO` | Ontvanger(s) contactformulier (komma-gescheiden), bv. `info@soloswim.be,kristof@soloswim.be` |
| `MAILCHIMP_API_KEY` | Mailchimp API key (SwimCare-account) |
| `MAILCHIMP_AUDIENCE_ID` | Audience/list-ID van de SwimCare-mailinglijst |
| `MAILCHIMP_SERVER_PREFIX` | Optioneel, bv. `us21` (anders uit API-key-suffix) |
| `MAILCHIMP_TAG` | Tag op nieuwe inschrijvingen (standaard `SoloSwim`) |
| `MAILCHIMP_STATUS_IF_NEW` | `pending` (double opt-in, default) of `subscribed` |
| `NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID` | Trustpilot Business Unit ID (voor TrustBox score/reviews) |
| `NEXT_PUBLIC_TRUSTPILOT_URL` | Optioneel; default `https://nl-be.trustpilot.com/review/soloswim.be` |
| `MONGODB_URL` | Wordt in Compose overschreven naar `mongodb://mongo:27017/soloswim` |
| `GOOGLE_ANALYTICS_ID` | GA4 measurement ID (`G-…`). **Aanbevolen** — runtime via `/api/public-config` (niet geïnlined bij build). |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS` | Optionele fallback (zelfde ID). Next kan `NEXT_PUBLIC_*` bij build leeg inlinen; gebruik bij voorkeur `GOOGLE_ANALYTICS_ID`. |
| `INTERNAL_API_SECRET` | Optioneel; beschermt handmatige POST naar interne order/mail API’s |

### Mailchimp nieuwsbrief (footer)

Bezoekers schrijven zich via de footer in op de **bestaande SwimCare-audience**. Elke inschrijving krijgt de tag `SoloSwim` (of `MAILCHIMP_TAG`).

1. Mailchimp → Audience → Settings → **Audience ID** kopiëren → `MAILCHIMP_AUDIENCE_ID`
2. Account → Extras → **API keys** → `MAILCHIMP_API_KEY`
3. Zorg dat de tag **SoloSwim** bestaat (of laat de API hem aanmaken bij de eerste signup)
4. Default is double opt-in (`MAILCHIMP_STATUS_IF_NEW=pending`) — past bij EU/GDPR
5. Na `.env` wijzigen: `docker compose up -d --force-recreate soloswim`

Test: footerformulier invullen → in Mailchimp bij Contacts de tag SoloSwim zien (na bevestiging bij pending).

### Trustpilot

Score + reviews via officiële TrustBox op de homepage (reviews-sectie) en review-CTA op `/bestelling-voltooid`. Korte link: `https://www.soloswim.be/trustpilot`.

1. Log in op [Trustpilot Business](https://businessapp.b2b.trustpilot.com/)
2. Integrations → **TrustBox** → kopieer **Business Unit ID**
3. Zet in `.env`: `NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID=...`
4. Image opnieuw bouwen/deployen (NEXT_PUBLIC_ wordt bij build meegenomen)

Zonder Business Unit ID tonen we nog steeds een link + “Schrijf een review”-knop; de live score-widget verschijnt pas mét ID.

#### Automatic Feedback Service (AFS)

Trustpilot kan na elke aankoop automatisch een reviewuitnodiging sturen als je hun unieke **BCC-adres** meestuurt op de orderbevestiging.

1. Trustpilot Business → Get reviews → **Automatic Feedback Service**
2. Kopieer het unieke BCC-adres (vaak `…@clients.trustpilot.com` of vergelijkbaar)
3. Zet in `.env`: `TRUSTPILOT_AFS_BCC=dat-adres@…`
4. Container herstarten (`docker compose up -d --force-recreate soloswim`) — runtime env, geen rebuild nodig

De ordermail gaat dan BCC naar zowel `MAILGUN_ORDER_BCC` als `TRUSTPILOT_AFS_BCC`. De klant ziet het AFS-adres niet.

#### Orderbevestiging (Mailgun-template)

De API stuurt mee:

| Parameter | Waarde |
|---|---|
| `{{trustpilot_url}}` | https://nl-be.trustpilot.com/review/soloswim.be |
| `{{trustpilot_review_url}}` | zelfde URL (review schrijven) |

Voeg in Mailgun (Sending → Templates → orderbevestiging) bv. toe:

```html
<p>Tevreden over SoloSwim? Laat een review achter op Trustpilot:<br/>
<a href="{{trustpilot_review_url}}">{{trustpilot_review_url}}</a></p>
```

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

**Reviews**

| Parameter | Voorbeeld |
|---|---|
| `{{trustpilot_url}}` | https://nl-be.trustpilot.com/review/soloswim.be |
| `{{trustpilot_review_url}}` | zelfde URL |

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
docker build -t swimcare/soloswim:latest .
```

Of via Compose:

```bash
docker compose build soloswim
docker compose up -d soloswim
```

Image pushen (als je een registry gebruikt):

```bash
docker push swimcare/soloswim:latest
```

> Stripe-, Mailgun-, Mongo- en Google Analytics-waarden zitten **niet** hard in de image. Die komen via `env_file: .env` bij het starten.  
> Analytics: browser haalt de ID op via `/api/public-config`. Zet bij voorkeur `GOOGLE_ANALYTICS_ID=G-…` in `.env` (Next.js inline’t `NEXT_PUBLIC_*` soms leeg bij build). Check: `curl -s https://www.soloswim.be/api/public-config`.

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

Handige frontmatter-velden:

| Veld | Gebruik |
|---|---|
| `product_id` | Interne artikelcode (zichtbaar als Art.nr.) |
| `ean` | EAN/GTIN (zichtbaar klein op de productpagina + Product JSON-LD). Leeg = niet tonen |
| `sizeVariants.*.ean` | Optioneel EAN per maat (overschrijft product-`ean` bij die maat) |
| `number` | Sorteervolgorde op overzichtspagina’s |
| `isAccessoire` | `true` = zwemmateriaal of verzorging (niet bij zwemschema’s) |
| `isVerzorging` | `true` = zichtbaar op `/zwemverzorging` (niet op `/zwemmateriaal`) |
| `brand` | Merknaam voor JSON-LD (bv. `TRIHARD`) |

---

## SEO (fase 1 + 3 + 5)

| Onderdeel | Locatie |
|---|---|
| `robots.txt` | `public/robots.txt` |
| Sitemap | `https://www.soloswim.be/sitemap.xml` (`pages/sitemap.xml.js`) |
| Canonical + OG | `lib/site.js` → `pageSeo()` op publieke pagina’s |
| JSON-LD | Organization + WebSite in `_app`; Product/FAQ/Breadcrumb op product- en listingpagina’s |
| FAQ-bron | `data/faq.js` (UI + FAQPage-schema) |
| On-page | Eén H1 per pagina, beschrijvende alt-teksten, interne footerlinks |
| Performance | Self-hosted fonts (`next/font`), deferred Chatwoot, AVIF/WebP, image `sizes`/`priority` voor LCP |

Na deploy:

1. Check `https://www.soloswim.be/robots.txt` en `/sitemap.xml`
2. In Google Search Console: sitemap indienen
3. Rich Results Test / Schema Validator op een productpagina
4. Optioneel: PageSpeed Insights / CrUX op homepage en een productpagina

---

## Kortingen & acties

SoloSwim ondersteunt **twee** kortingslagen (ze werken naast elkaar):

1. **Stripe promotion codes** — klant vult een code in bij Checkout (`allow_promotion_codes`). Beheer in Stripe → Coupons / Promotion codes.  
2. **Website-sale** — zichtbare %-korting op productpagina’s, overzichten en winkelwagen. Config in `config/sale.js`.

### Website-sale (`config/sale.js`)

```js
module.exports = {
  enabled: true,
  label: "Lente-actie: tot 20% korting op zwemschema’s", // banner; leeg = geen banner
  sitewidePercent: 10,          // % op alle artikelen (0 = uit)
  productPercents: {
    BCK1: 20,                   // product_id uit /products/*.md
    BCT1: 15,
  },
};
```

**Regels**

- Per artikel geldt de **hoogste** van `sitewidePercent` en de product-% — **geen stacking**.  
  Voorbeeld: sitewide 10% + BCK1 20% → BCK1 krijgt 20%; een ander product zonder eigen % krijgt 10%.  
- Prijzen in Markdown blijven de catalogusprijs; de sale zet de actieprijs + doorgestreepte oude prijs.  
- Checkout herberekent prijzen **server-side** (clientprijs wordt niet vertrouwd).  
- Stripe-codes blijven beschikbaar bovenop de actieprijs.  
- Na wijziging van `config/sale.js`: **opnieuw image bouwen en deployen**.

Product-IDs vind je in de frontmatter van elk bestand in `/products` (`product_id: "BCK1"`).

---

## Redirects (QR-codes, flyers, video’s)

Alle korte URLs staan in `next.config.js` onder `redirects()`. Ze zijn **niet** zichtbaar op de webshop-pagina’s: de site stuurt de bezoeker meteen door naar de echte bestemming (HTTP redirect, `permanent: true`).

Doel: op **gedrukte zwemschema’s**, flyers of stickers een korte, stabiele link gebruiken (`soloswim.be/…`). De video- of campagne-URL achter die link kun je later wijzigen zonder nieuwe QR-codes te printen.

### Soorten redirects

| Type | Voorbeeld | Bestemming |
|---|---|---|
| Google review | `/review` | Google Business review-link |
| Flyer-campagnes | `/f1` … `/f4` | Productenpagina met UTM-parameters |
| Trainingsvideo’s | `/bck1g1`, `/bct1s3`, … | Extern videoplatform (nu Vimeo) |

Er zijn geen Vimeo-/YouTube-embeds in de UI. Alleen doorverwijzingen.

### Naming trainingsvideo’s

Korte code = **product + editie + niveau + trainingnummer**.

| Deel | Waarde | Betekenis |
|---|---|---|
| Product | `bck` / `bcd` / `bct` | Borstcrawl **kracht** / **duur** / **techniek** |
| Editie | `1` | Editie 1 |
| Niveau | `g` / `b` / `s` | **G**evorderden / **B**eginners / **S**emi-gevorderden |
| Nummer | `1` … `10` | Training 1 t/m 10 op het schema |

Voorbeelden:

- `https://www.soloswim.be/bck1g1` → kracht, editie 1, gevorderden, training 1  
- `https://www.soloswim.be/bcd1b5` → duur, editie 1, beginners, training 5  
- `https://www.soloswim.be/bct1s3` → techniek, editie 1, semi-gevorderden, training 3  

Huidige sets in de config:

| Prefix | Set |
|---|---|
| `/bck1g1` … `/bck1g10` | Kracht — gevorderden |
| `/bcd1g1` … `/bcd1g10` | Duur — gevorderden |
| `/bcd1b1` … `/bcd1b10` | Duur — beginners |
| `/bct1g1` … `/bct1g10` | Techniek — gevorderden |
| `/bct1s1` … `/bct1s10` | Techniek — semi-gevorderden |

### Videoplatform wijzigen (bv. Vimeo → YouTube)

1. Upload de video’s (bij voorkeur **unlisted** / niet-openbaar, zoals de huidige Vimeo-privacylinks).  
2. Pas in `next.config.js` alleen de `destination`-URL’s aan; laat `source` (`/bck1g1`, …) ongewijzigd zodat bestaande QR-codes blijven werken.  
3. Image opnieuw bouwen en deployen.

Let op: `permanent: true` (HTTP 308) wordt door browsers lang gecached. Na een platformwissel testen in een private/incognito-venster. Bij hardnekkige oude Vimeo-cache tijdelijk `permanent: false` zetten, deployen, daarna weer `true`.

### Nieuwe redirect toevoegen

```js
// next.config.js → redirects()
{
  source: "/nieuwecode",
  destination: "https://www.youtube.com/watch?v=…",
  permanent: true,
},
```

Daarna opnieuw **build + deploy**. Lokaal: `npm run build && npm run start` en `http://localhost:3000/nieuwecode` openen.

---

## Troubleshooting

| Symptoom | Check |
|---|---|
| `Webhook not configured` | `STRIPE_WEBHOOK_SECRET` in container: `docker exec soloswim printenv STRIPE_WEBHOOK_SECRET` |
| Stripe webhook **timeout** | Webhook antwoordt na Mongo-save; mail gaat async. Check of Mongo snel reageert (`docker compose logs mongo`) en Mailgun-logs op de app |
| Checkout start niet | `STRIPE_SECRET_KEY` + `HOST` in `.env`; app-logs |
| Geen ordermail | Mailgun env + templatenaam; logs op `Mailgun order confirmation` / `Webhook: email` |
| Contactformulier “verzonden” maar geen mail | Check `MAILGUN_CONTACT_TO` + Mailgun Logs (`delivered` vs `failed`). Bij `550 5.7.511 banned sender` → Microsoft blokkeert het Mailgun-IP; zie “M365 banned sender” hieronder. |
| Geen Google Analytics hits | `curl -s https://www.soloswim.be/api/public-config` moet `{"gaId":"G-…","configured":true}` tonen. Zet bij voorkeur `GOOGLE_ANALYTICS_ID=G-…` in `.env` (niet alleen `NEXT_PUBLIC_…`). Daarna recreate + nieuwe image. DevTools → Network: `gtag/js?id=G-…`. |
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

### M365 `550 5.7.511 banned sender` (mail naar @soloswim.be faalt)

Mailgun accepteert het bericht, maar **Microsoft 365 weigert** het Mailgun-verzend-IP (bv. `141.193.32.11`) voor jouw `soloswim.be`-tenant. Het MX `soloswim-be.mail.protection.outlook.com` is normaal en correct.

1. **Eerst Microsoft (ontvanger-kant):** stuur de bounce / vraag delisting via [Microsoft’s delist-proces](https://go.microsoft.com/fwlink/?LinkId=526653) of `delist@microsoft.com`, met het geblokkeerde IP uit de Mailgun-log. In Microsoft 365 Admin / Defender kun je ook anti-spam / connection filtering / allow lists voor dat IP of voor `mg.swimcare.be` controleren.
2. **Daarna eventueel Mailgun:** vraag of dat shared IP een slechte reputatie heeft en of dedicated IP / IP-pool-wissel mogelijk is — lost de Microsoft-blokkade niet altijd zelf op.

Tot delisting rond is, blijven mails naar `@soloswim.be` vanaf dat IP falen; klantmails naar Gmail/andere providers kunnen wél aankomen.
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
