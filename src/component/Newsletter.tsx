import {
  TextInput,
  Button,
  Group,
  Box,
  createStyles,
  Container,
  Text,
  Center,
} from "@mantine/core";
import { News } from "tabler-icons-react";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { getNewsletters } from "../../services";

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colors.gray[3],
  },

  message: {
    width: "100%",
    color: theme.colors[theme.primaryColor][9],
    fontWeight: 500,
    gap: 5,
  },
}));

export default function Newsletter() {
  const { classes } = useStyles();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) =>
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)
          ? null
          : "Email inválido",
    },
  });

  interface EmailProp {
    email: string;
  }

  const handleSubmit = async () => {
    const getEmail = (await getNewsletters()) || [];
    const emails = getEmail.map((email: { email: string }) => email.email);

    if (emails.find((email: string) => email == form.values.email)) {
      form.setErrors({ email: "Email já registrado" });
    } else {
      await fetch("/api/newsletterSubmit", {
        method: "POST",
        body: JSON.stringify(form.values),
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsSubmitted(true);
    }
  };

  return (
    <Container fluid className={classes.wrapper}>
      <Box sx={{ maxWidth: 400 }} mx="auto" py={32}>
        <Text size="lg" weight={500} mb={16} align="center">
          Registre-se e fique por dentro das novidades.
        </Text>
        <form
          onSubmit={form.onSubmit(() => {
            handleSubmit();
          })}
        >
          {!isSubmitted ? (
            <>
              <TextInput
                required
                placeholder="seu@email.com"
                {...form.getInputProps("email")}
              />

              <Group position="right" mt="md">
                <Button type="submit">Enviar</Button>
              </Group>
            </>
          ) : (
            <Center className={classes.message}>
              <News />
              <Text size="md">Obrigada por se registrar!</Text>
            </Center>
          )}
        </form>
      </Box>
    </Container>
  );
}
