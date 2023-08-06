// src/hooks/useOfflineSync.js

import { useEffect } from 'react';
import { useNetwork } from '../contexts/NetworkContext';
import { fetchStoredMutations, removeStoredMutation } from '../utils/OfflineMutations';
import apolloClient from '../stores/apolloClient';

const useOfflineSync = () => {
  const { addNetworkStatusListener } = useNetwork();

  useEffect(() => {
    const removeListener = addNetworkStatusListener(async (isOnline) => {
      if (isOnline) {
        // Fetch stored mutations and execute them
        const mutations = await fetchStoredMutations();
        for (const mutation of mutations) {
          try {
            await apolloClient.mutate({
              mutation: mutation.mutation,
              variables: mutation.variables
            });
            // Remove mutation from storage after successful execution
            await removeStoredMutation(mutation);
          } catch (error) {
            console.error("Error executing stored mutation:", error);
          }
        }
      }
    });

    // Cleanup: remove the network status listener when the hook is unmounted
    return () => {
      removeListener();
    };
  }, []);
};

export default useOfflineSync;
