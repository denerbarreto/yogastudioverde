import React, { useState } from "react";
import {
  createStyles,
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  Center,
} from "@mantine/core";
import {
  BrandWhatsapp,
  BrandInstagram,
  Mail,
  MailForward,
} from "tabler-icons-react";
import { useForm } from "@mantine/form";
import { send } from "@emailjs/browser";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: 400,
    boxSizing: "border-box",
    background:
      "linear-gradient(180deg, rgba(248, 255, 254, 0) 0%, rgba(164, 207, 201, 0) 0%,rgba(157, 200, 194, 0.6643032212885154) 0%, rgba(123, 164, 158, 0.7931547619047619) 100%)",

    padding: theme.spacing.xl * 2.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
  },

  title: {
    fontFamily: theme.fontFamily,
    color: theme.white,
    lineHeight: 1,
  },

  map: {
    border: 0,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 300,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  andress: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 450,
    cursor: "pointer",

    "&:hover": {
      color: theme.colors[theme.primaryColor][2],
    },

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  form: {
    backgroundColor: theme.white,
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  social: {
    color: theme.white,

    "&:hover": {
      color: theme.colors[theme.primaryColor][2],
    },
  },

  input: {
    backgroundColor: theme.white,
    borderColor: theme.colors.gray[4],
    color: theme.black,

    "&::placeholder": {
      color: theme.colors.gray[5],
    },
  },

  inputLabel: {
    color: theme.black,
  },

  control: {
    backgroundColor: theme.colors[theme.primaryColor][6],
  },

  message: {
    height: "100%",
    color: theme.colors[theme.primaryColor][9],
    fontWeight: 500,
    gap: 8,
  },
}));

const social = [BrandWhatsapp, BrandInstagram, Mail];

export default function Contact() {
  const { classes } = useStyles();
  const [isSubmitted, setisSubmitted] = useState(false);
  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email inválido"),
    },
  });

  var templateParams = {
    name: form.values.name,
    message: form.values.message,
    email: form.values.email,
  };

  const sendEmail = () => {
    send(
      "service_3324xdu",
      "template_qmqgpo1",
      templateParams,
      "Q4B6n_OMqhFDrKTNv"
    ).then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
      component="a"
      href={
        Icon.name == "BrandWhatsapp"
          ? "https://wa.me/5567998380011"
          : Icon.name == "BrandInstagram"
          ? "https://www.instagram.com/yoga.studioverde/"
          : Icon.name == "Mail"
          ? "mailto:contato@yogastudioverde.com"
          : ""
      }
      target="_blank"
    >
      <Icon size={22} />
    </ActionIcon>
  ));

  return (
    <div className={classes.wrapper}>
      <SimpleGrid
        cols={2}
        spacing={50}
        breakpoints={[{ maxWidth: "sm", cols: 1 }]}
      >
        <div>
          <Title className={classes.title}>Entre em contato</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Deixei seu email e entrerei em contato com você em instantes.
          </Text>
          <Group mt="xl" mb="xl">
            {icons}
          </Group>

          <Text
            className={classes.andress}
            underline
            variant="link"
            component="a"
            href="https://goo.gl/maps/1LZwgLP91uGqT7FA9"
            target="_blank"
          >
            R. Pres. Juscelino Kubitschek de Oliveira, 1341 - Centro, Nova
            Andradina - MS, 79750-000
          </Text>
        </div>
        <form
          className={classes.form}
          // onSubmit={form.onSubmit((values) => console.log(values))}
          onSubmit={form.onSubmit((values) => {
            form.reset();
            setisSubmitted(true);
            sendEmail();
            console.log(values);
          })}
        >
          {!isSubmitted ? (
            <>
              <TextInput
                type="email"
                label="Email"
                placeholder="seu@email.com"
                required
                classNames={{ input: classes.input, label: classes.inputLabel }}
                {...form.getInputProps("email")}
              />
              <TextInput
                type="text"
                label="Nome"
                placeholder="seu nome"
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
                {...form.getInputProps("name")}
              />
              <Textarea
                required
                label="Mensagem"
                placeholder="Sua mensagem"
                minRows={4}
                mt="md"
                classNames={{ input: classes.input, label: classes.inputLabel }}
                {...form.getInputProps("message")}
              />

              <Group position="right" mt="md">
                <Button type="submit" className={classes.control}>
                  Enviar mensagem
                </Button>
              </Group>
            </>
          ) : (
            <Center className={classes.message}>
              <MailForward size={32} />

              <Text align="center" size="xl">
                Obrigada por entrar em contato!
              </Text>
            </Center>
          )}
        </form>
      </SimpleGrid>
    </div>
  );
}
