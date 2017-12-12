
import Communications from 'react-native-communications';
function callPhone(phone) {
    Communications.phonecall(phone, true)
}

function navigate(pageName) {
    global.navigation.navigate(pageName);
}

function resetTo(pageName, index) {
    index = index || 0
    let resetAction = NavigationActions.reset({
        index: index,
        actions: [
            NavigationActions.navigate({ routeName: pageName })
        ]
    })
    global.navigation.dispatch(resetAction)
}

module.exports = {
    callPhone,
    navigate,
    resetTo
}