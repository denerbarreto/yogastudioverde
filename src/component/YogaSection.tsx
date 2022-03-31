import {
  createStyles,
  Text,
  Container,
  Title,
  Image,
  Stack,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    gap: 32,
    [theme.fn.smallerThan("sm")]: {
      flexWrap: "wrap",
    },
  },
  description: {
    maxWidth: "100%",
  },

  image: {
    boxShadow: theme.shadows.sm,

    "&, img": {
      minWidth: 400,

      [theme.fn.smallerThan("sm")]: {
        minWidth: "100%",
        maxWidth: 400,
      },
    },
  },
}));

type HomeSectionProps = {};

export default function YogaSection(props: HomeSectionProps) {
  const { classes } = useStyles();
  return (
    <Container px={32} py={32} mx={0} fluid className={classes.wrapper}>
      <Stack justify="flex-start">
        <Title order={2}>Title</Title>
        <Text<"p">
          component="p"
          size="md"
          weight={500}
          className={classes.description}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ac pulvinar nisl. Aliquam ultrices finibus felis, quis eleifend tellus
          imperdiet id. Integer in nibh vehicula, consectetur massa vel, commodo
          dui. Aenean dictum, enim finibus sollicitudin pharetra, risus lectus
          vestibulum odio, vitae ornare ante neque nec neque. Quisque egestas
          ligula nisl, quis auctor nisl aliquam vel. Cras eget lacinia leo.
          Nullam pulvinar aliquet augue, quis convallis dui elementum in.
        </Text>
      </Stack>
      <Image
        className={classes.image}
        height={500}
        withPlaceholder
        fit="cover"
      />
    </Container>
  );
}
