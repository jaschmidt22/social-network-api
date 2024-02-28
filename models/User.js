// **User**:
const { Schema, model, Types } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        }, 
        email: {
            type: String,
            unique: true,
            required: true,
            validate: {
                validator : function(v) {
                    return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(v);
                }

            }
        },
        thoughts: {

        },
        friends: {

        },
        {
            toJSON: {
                virtuals: true,
            },
            id: false,
            

        }
    }
)

// - `username`

//   - String
//   - Unique
//   - Required
//   - Trimmed

// - `email`

//   - String
//   - Required
//   - Unique
//   - Must match a valid email address (look into Mongoose's matching validation)

// - `thoughts`

//   - Array of `_id` values referencing the `Thought` model

// - `friends`
//   - Array of `_id` values referencing the `User` model (self-reference)

// **Schema Settings**:

// Create a virtual called `friendCount` that retrieves the length of the user's `friends` array field on query.
