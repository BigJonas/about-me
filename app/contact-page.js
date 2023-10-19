export function goBack(args) {
  const button = args.object;
  const page = button.page;
  page.frame.goBack();
}
