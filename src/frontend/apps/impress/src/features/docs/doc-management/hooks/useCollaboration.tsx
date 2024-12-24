import { useEffect } from 'react';

import { useCollaborationUrl } from '@/core/config';
import { useBroadcastStore } from '@/stores';

import { useProviderStore } from '../stores/useProviderStore';
import { Base64 } from '../types';

export const useCollaboration = (room?: string, initialContent?: Base64) => {
  const collaborationUrl = useCollaborationUrl(room);
  const { setBroadcastProvider } = useBroadcastStore();
  const { provider, createProvider, destroyProvider } = useProviderStore();

  useEffect(() => {
    if (!room || !collaborationUrl?.wsUrl || provider) {
      return;
    }

    const newProvider = createProvider(
      collaborationUrl.wsUrl,
      room,
      initialContent,
    );
    setBroadcastProvider(newProvider);
  }, [
    provider,
    collaborationUrl?.wsUrl,
    room,
    initialContent,
    createProvider,
    setBroadcastProvider,
  ]);

  useEffect(() => {
    return () => {
      destroyProvider();
    };
  }, [destroyProvider]);
};
