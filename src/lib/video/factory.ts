import { DailyVideoProvider } from './providers/daily'
import { LiveKitVideoProvider } from './providers/livekit'
import { IVideoProvider } from './interfaces'

export class VideoProviderFactory {
    static create(providerName: 'daily' | 'livekit'): IVideoProvider {
        switch (providerName) {
            case 'daily':
                return new DailyVideoProvider()
            case 'livekit':
                return new LiveKitVideoProvider()
            default:
                throw new Error(`Unsupported video provider: ${providerName}`)
        }
    }
}
