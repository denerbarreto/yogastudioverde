import { Global } from "@mantine/core";

const myGlobal = () => {
  return (
    <Global
      styles={(myTheme) => ({
        "*, *::before, *::after": {
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
        },
        body: {
          ...myTheme.fn.fontStyles(),
          backgroundColor:
            myTheme.colorScheme === "dark"
              ? myTheme.colors.dark[6]
              : myTheme.colors.gray[2],
          color:
            myTheme.colorScheme === "dark"
              ? myTheme.colors.dark[0]
              : myTheme.black,
          lineHeight: myTheme.lineHeight,
        },
      })}
    />
  );
};

export default myGlobal;
