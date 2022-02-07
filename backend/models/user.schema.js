 import mongoose from 'mongoose';
  const { Schema } = mongoose;

  const userSchema = new Schema({
    user:  String, // String is shorthand for {type: String}
    score: Number
  }, {collection: 'scoreboard'});

   const Users = mongoose.model('Scores', userSchema);

   export default Users