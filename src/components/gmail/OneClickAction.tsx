import { JsonLd } from "react-schemaorg";
import { EmailMessage } from "schema-dts";

interface Props {
  name: string;
  url: string;
}

export function OneClickAction({ name, url }: Props) {
  return (
    <JsonLd<EmailMessage>
      item={{
        "@context": "https://schema.org",
        "@type": "EmailMessage",
        potentialAction: {
          "@type": "ConfirmAction",
          name,
          target: url,
        },
      }}
    />
  );
}
