const ObservableArray = require("@nativescript/core/data/observable-array").ObservableArray;
const listViewModule = require("@nativescript/core/ui/list-view");

export function onNavigatingTo(args) {
  const page = args.object;
  const listView = page.getViewById("skillList");

  const itemList = new ObservableArray([
    {
      name: 'Rock Climbing',
      description: 'I rock climb! Im still pretty new to the sport, only about 7 months. My hardest grades climbing indoors are V6 boulder and -5.12 top rope.',
      image: '~/images/rock-climbing.jpg',
      imageLabel: 'Horseshoe Canyon: Knock Knock 5.10b'
    },
    {
      name: 'Java Programming',
      description: 'I can code in java somewhat proficiently. Being mostly self-taught and applying my skills to our local robotics team.',
      image: '~/images/robotics.jpg',
      imageLabel: 'FRC Team 2557 The SOTAbots'
    },
    {
      name: 'Keyboard Building',
      description: 'I build keyboards!! I know this is very popular with computer science majors but it is super fun. And I love the silly sounds.',
      image: '~/images/keyboard.jpg',
      imageLabel: 'I dont have any good pictures of my keyboard so here is one I found online.'
    },
  ]);

  listView.items = itemList;
}

export function goBack(args) {
  const button = args.object;
  const page = button.page;
  page.frame.goBack();
}
