import { PollyClient, SynthesizeSpeechCommand } from '@aws-sdk/client-polly';
import { fromIni } from '@aws-sdk/credential-providers';
import * as fs from 'fs';

const polly = new PollyClient({
    region: 'us-east-1',
    credentials: fromIni({
        profile: 'polly'
    })
});

export async function synthesizeSpeech() {
    const params = {
        Text: "Hello! This is a test of Amazon Polly.",
        OutputFormat: "mp3",
        VoiceId: "Joanna"
    };

    try {
        const command = new SynthesizeSpeechCommand(params);
        const response = await polly.send(command);

        await fs.promises.writeFile('speech.mp3', Buffer.from(await response.AudioStream.transformToByteArray()));

        console.log("Speech synthesized successfully!");
    } catch (error) {
        console.error("Error:", error);
    }
}
