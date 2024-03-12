export const NEXT_PUBLIC_GOOGLE_ANALYTICS: string | undefined =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;

export const pageview = (url: string) => {
  (window as any).gtag("config", NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value: number;
}) => {
  (window as any).gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
