# Expo Linking.getInitialURL() Inconsistent null Return

This repository demonstrates a bug in Expo's `Linking.getInitialURL()` API where it inconsistently returns `null` even when the app is launched with a deep link. This makes it challenging to reliably handle deep links during initial app launch.

## Bug Description

The `Linking.getInitialURL()` method is used to retrieve the URL that launched the app.  However, in some cases, even with a valid deep link, the method returns `null`. This behavior is non-deterministic and makes deep link handling unreliable.

## Reproduction Steps

1. Clone this repository.
2. Run the app using Expo Go or EAS.
3. Launch the app using a deep link (e.g., `exp://127.0.0.1:19000`).
4. Observe that `Linking.getInitialURL()` may return `null`, even though a deep link was used to launch the app.

## Solution

The provided solution uses a combination of `Linking.getInitialURL` and an event listener for `Linking.addEventListener` to reliably handle deep links. This ensures that even if `getInitialURL` initially returns null, the deep link is captured when the event fires.