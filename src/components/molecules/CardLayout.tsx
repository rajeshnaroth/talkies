import React from "react";
import {
  Card,
  CardDetail,
  CardThumbNail,
  CardThumbNailImage,
  CardTitle,
} from "../atoms";

interface ICardProps {
  title: string;
  details: string;
  imageUrl: string;
}

export default function CardLayout({ title, details, imageUrl }: ICardProps) {
  return (
    <Card>
      <CardThumbNail>
        <CardThumbNailImage src={imageUrl} />
      </CardThumbNail>
      <CardTitle>{title}</CardTitle>
      <CardDetail>{details}</CardDetail>
    </Card>
  );
}
