import { CardWrapper } from "./card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonlabel="Don't have an account?"
      backButtonHref="/auth/register"
      showSocial
    >
      Login Form
    </CardWrapper>
  );
};
