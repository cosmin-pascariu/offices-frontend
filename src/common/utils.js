export const capitalize = (str) => {
  const words = str.split("/");
  const title =
    words?.length > 1 ? capitalizeWords(words[1].replace("-", " ")) : words[0];

  return title.charAt(0).toUpperCase() + title.slice(1);
};

function capitalizeWords(string) {
  return string.replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });
}
