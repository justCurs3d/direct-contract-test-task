import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    collection: 'users',
    versionKey: false,
    toJSON: {
        transform: function (doc, returnedDoc) {
            delete returnedDoc._id;
        },
    },
})
export class User {
    @Prop({ type: String, required: true, index: true })
    username: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
