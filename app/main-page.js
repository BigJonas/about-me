import { createViewModel } from './main-view-model';

export function onNavigatingTo(args) {
  const page = args.object;
  page.bindingContext = createViewModel();
}

export function bioNav(args) {
  const button = args.object;
  const page = button.page;

  page.frame.navigate('bio-page');
}

export function skillsNav(args) {
  const button = args.object;
  const page = button.page;

  page.frame.navigate('skills-page');
}

export function contactNav(args) {
  const button = args.object;
  const page = button.page;

  page.frame.navigate('contact-page');
}
