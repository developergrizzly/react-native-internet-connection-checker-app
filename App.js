
import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    Text,
    View,
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";



const App = () => {
    const [isOffline, setOfflineStatus] = useState(false);

    useEffect(() => {
        const removeNetInfoSubscription = NetInfo.addEventListener((state) => {
            const offline = !(state.isConnected && state.isInternetReachable);
            setOfflineStatus(offline);
        });

        return () => removeNetInfoSubscription();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <View>
                    <Text style={{ textAlign: 'center', fontFamily: 'Open Sans', fontSize: 18, color: 'black' }}>
                        Internet is : 
                        {
                            isOffline ? " OFF" : " ON"
                        }
                    </Text>
                </View>

            </View>
        </SafeAreaView>
    );
};

export default App;
