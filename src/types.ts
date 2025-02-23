import { FC } from "react";
import { z } from "zod";

interface MailOutput {
  subject: string;
  body: string;
  text: string;
}

export type MailFactory<T> = (params: T) => MailOutput;

export type MailFactories = MailFactory<unknown>[];

export interface MailFC<P = {}> extends FC<P> {
  propsSchema?: z.Schema;
}
