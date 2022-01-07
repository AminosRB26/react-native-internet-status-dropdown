# Getting Started
Use `npm install react-native-internet-status-dropdown` to install the package

# Usage
`import InternetStatusBox from 'react-native-internet-status-dropdown'`

All props for the component are optional.

Inside `App.js` or the equivalent entry file

```
<View style={{ flex: 1 }}>
    <InternetStatusBox />
    <The Rest Of Your Content Goes Here>
</View>
```

# Props
`slideDuration` controls the amount of time it takes for the dropdown to slide onto screen (In milliseconds). Default is `700`. Must be a `Number`

**Example** `<InternetStatusBox slideDuration={500} />`
#

`label` The label text contained in the dropdown. Default is `No Internet Connection`. Must be a `String`

**Example** `<InternetStatusBox label={'No Internet'} />`
#

`customLabel` custom label component which replaces the original label. Must be a `<Text>` component

**Example** `<InternetStatusBox customLabel={<Text style={{ fontFamily: 'Poppins-Regular', fontSize: 16 }}>No Internet Connection</Text>} />`
#

`containerStyle` container style which accepts basic style object. Must be a `ViewStyle`

**Example** `<InternetStatusBox containerStyle={{ borderRadius: 5, paddingVertical: 4 }} />`
#

`backgroundColor` container background color. Must be a valid color string

**Example** `<InternetStatusBox labelColor backgroundColor={'#FDA361'} />`
#

`labelColor` label text color. Must be a valid color string

**Example** `<InternetStatusBox labelColor labelColor={'#000000'} />`
#