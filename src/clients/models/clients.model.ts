import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
    collection: 'clients',
    versionKey: false,
    toJSON: {
        transform: function (doc, returnedDoc) {
            delete returnedDoc._id;
        },
    },
})
export class Client {
    @Prop({ type: Number, required: true, index: true })
    id: number;

    @Prop({ type: String, required: true })
    firstName: string;

    @Prop({ type: String, required: true })
    lastName: string;

    @Prop({ type: String, required: true })
    gender: string;

    @Prop({ type: String, required: true })
    address: string;

    @Prop({ type: String, required: true })
    city: string;

    @Prop({ type: String, required: true })
    phone: string;

    @Prop({ type: String, required: true })
    email: string;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
