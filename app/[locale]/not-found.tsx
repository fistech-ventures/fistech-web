import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import NotFoundContent from "@/components/application/not-found-content";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fistech Ventures",
  description: "Global IT and Digital Solutions",
};

export default async function GlobalNotFound() {
  const locale = routing.defaultLocale;
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <NotFoundContent />
    </NextIntlClientProvider>
  );
}
