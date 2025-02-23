import { Body, Container, Head, Html, Preview } from "@react-email/components";

interface Props {
  children: React.ReactNode;
  preview?: string;
}

export function Base({ children, preview }: Props) {
  return (
    <Html>
      <Head />
      <Body>
        {preview && <Preview>{preview}</Preview>}
        <Container>{children}</Container>
      </Body>
    </Html>
  );
}
