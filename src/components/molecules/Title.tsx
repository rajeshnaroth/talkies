import React from "react";
import { useTranslation } from "react-i18next";
import H1 from "../atoms/H1";

export default function Title() {
  const { t } = useTranslation();
  return <H1>{t("Talkies")}</H1>;
}
