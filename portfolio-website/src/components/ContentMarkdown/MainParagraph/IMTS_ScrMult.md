This is one of the minigames ("quests") from a project for a larger experience with city games designed for _Nova Gorica (Slovenia) and Gorizia (Italy)_. For this concept, I was inspired by multi-screen setups and by flip-dot displays (whenever they partially glitch). The player's goal is to view a sliced image part by part and piece together a code location or phrase. This game naturally fits in places with many spread monitors, like libraries and classrooms.

&nbsp;

The implementation consists of device communication between our special phone app based on the backend of the city platform [Toto](https://toto.io) and "objects" linking that with chosen devices, via the MQTT IoT protocol (pub/sub messaging). I worked on this concept independently, first trying a direct implementation to monitors in C++, later switching to Electron browser windows in JavaScript, which ended up being both easier and safer. (Thanks to my teammate [Kevin](https://github.com/kevinveld2001) for the advice!)

&nbsp;

For a more extensive description of the whole development process, please read the [following blog post.](https://acutecity.wordpress.com/2024/01/11/week-9-10-15-16-memory-puzzle-with-screens/)