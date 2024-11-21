import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    collection: 'sessions',
    versionKey: false,
    toJSON: {
        transform: function (doc, returnedDoc) {
            delete returnedDoc._id;
        },
    },
})
export class Session {
    @Prop({ type: String, required: true })
    username: string;

    @Prop({ type: String, required: true })
    secret: string;

    @Prop({ type: String, required: true, index: true })
    token: string;
}

export const SessionSchema = SchemaFactory.createForClass(Session);
