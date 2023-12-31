"use client";

import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonlabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonlabel,
  showSocial,
}: CardWrapperProps) => {
  return <Card className="w-[400px] shadow-md">{children}</Card>;
};
