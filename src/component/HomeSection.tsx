import { createStyles, Text, Container, Title, Image } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
  },
  image: {
    marginTop: 32,
    alignSelf: "center",
    width: 600,
    maxWidth: "100%",
    boxShadow: theme.shadows.md,
  },
}));

type HomeSectionProps = {};

export default function HomeSection(props: HomeSectionProps) {
  const { classes } = useStyles();
  return (
    <Container px={32} py={32} mx={0} fluid className={classes.wrapper}>
      <Title pb={16} order={2}>
        Title
      </Title>
      <Text<"p"> component="p" size="md" weight={500}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac
        pulvinar nisl. Aliquam ultrices finibus felis, quis eleifend tellus
        imperdiet id. Integer in nibh vehicula, consectetur massa vel, commodo
        dui. Aenean dictum, enim finibus sollicitudin pharetra, risus lectus
        vestibulum odio, vitae ornare ante neque nec neque. Quisque egestas
        ligula nisl, quis auctor nisl aliquam vel. Cras eget lacinia leo. Nullam
        pulvinar aliquet augue, quis convallis dui elementum in.
      </Text>

      <Image
        className={classes.image}
        height={400}
        withPlaceholder
        fit="cover"
      />
    </Container>
  );
}
