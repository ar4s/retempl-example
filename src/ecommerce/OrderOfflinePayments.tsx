import { z } from "zod";
import { MailFC } from "../types";

const schema = z.object({
  orderNumber: z.coerce.number(),
  amountToPay: z.coerce.number(),
  currency: z.string(),
  accountDetails: z.string(),
});

type Props = z.infer<typeof schema>;

export const OrderOfflinePayments: MailFC<Props> = ({
  orderNumber,
  amountToPay,
  currency,
  accountDetails,
}) => {
  return (
    <>
      <p>Witamy!</p>
      <p>
        Informujemy, że twoje zamówienie nr {orderNumber} oczekuje na płatność.
      </p>
      <p>Prosimy o wykonanie przelewu na rachunek:</p>
      <p>{accountDetails}</p>
      <p>
        Kwota do wpłaty: {amountToPay} {currency}.
      </p>
      <p>
        Po zaksięgowaniu wpłaty w naszym systemie, zamówienie zostanie
        przekazane do realizacji.
      </p>
      <p>
        Dziękujemy za zainteresowanie naszą ofertą. Zapraszamy do ponownych
        zakupów.
      </p>
    </>
  );
};
OrderOfflinePayments.propsSchema = schema;
