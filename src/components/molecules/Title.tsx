import React from "react";
import H1 from "../atoms/H1";
import { useTranslation } from "react-i18next";

export default function Title() {
  const { t } = useTranslation();
  return <H1>{t("Talkies")}</H1>;
}
