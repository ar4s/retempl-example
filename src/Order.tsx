import { Html } from "@react-email/components";
import { z } from "zod";
import { Button, Heading } from "./components";
import { OneClickAction } from "./components/gmail";
import { MailFC } from "./types";

const schema = z.object({
  orderNumber: z.coerce.number(),
});

export type OrderProps = z.infer<typeof schema>;

export const Order: MailFC<OrderProps> = ({ orderNumber }) => {
  return (
    <Html>
      <Heading>Order #{orderNumber}</Heading>
      <Button variant="primary" link="/">
        Go To Order #{orderNumber}
      </Button>
      <OneClickAction name="Approve" url="/approve" />
    </Html>
  );
};
Order.propsSchema = schema;
