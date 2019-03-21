import ActionCable from 'actioncable';
import { CABLE } from "../constants";

export default function MessagesSubscription(
  game_id,
  { onUpdate = () => {} } = {}
) {
  // 2. Define our constructor
  this.cable = ActionCable.createConsumer(CABLE);
  // this.channel;
  this.game_id = game_id;
  this.onUpdate = onUpdate;

  // 3. Define the function we will call to subscribe to our channel
  this.subscribe = () => {
    console.log("subscribed")
    this.channel = this.cable.subscriptions.create(
      { channel: 'MessagesChannel', id: this.game_id },
      {
        connected: this.connected,
        disconnected: this.disconnected,
        received: this.received,
        rejected: this.rejected,
      }
    );
  };

  // 4. Define our default ActionCable callbacks.
  this.received = (data) => {
    console.log(`Received Data: ${data}`);

    this.onUpdate(data);
  };

  this.connected = () => {
    console.log(`this.connected`);
  };

  this.disconnected = () => {
    console.warn(`this.disconnected.`);
  };

  this.rejected = () => {
    console.warn('I was rejected! :(');
  };
}
