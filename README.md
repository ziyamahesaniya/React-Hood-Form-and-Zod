# Employee Forms App

A React Native (Expo) app built for my Mobile App Development assignment. The app has three screens — an Employee Information form, a Sign In form, and a Sign Up form — all built with React Hook Form and Zod for validation.

## Tech Stack

- Expo (SDK 56) + TypeScript
- React Navigation (native stack)
- React Hook Form
- Zod + @hookform/resolvers
- Plain React Native StyleSheet (no UI library)

## Features

- Home screen with buttons to each form
- Employee Information form (7 fields: name, email, phone, employee ID, postal code, department, job title)
- Sign In form (email + password)
- Sign Up form (name, email, password, confirm password)
- Canadian phone number and postal code validation
- Password strength rules + confirm password matching on Sign Up
- Show/hide password toggle
- Inline error messages under each field
- Submit button disabled until the form is valid
- Loading spinner on submit
- Keyboard-avoiding + scrollable forms, safe area support

## Project Structure

```
src/
  navigation/     -> stack navigator + typed routes
  screens/        -> Home, EmployeeForm, SignIn, SignUp
  components/     -> reusable FormInput, PasswordInput, SubmitButton, ScreenContainer
  validation/     -> Zod schemas (shared rules + one file per form)
  theme/          -> colors, spacing, typography constants
```

I split the Zod validation into a `sharedSchemas.ts` file so things like email, password, phone, and postal code rules are only written once and reused across all three forms instead of copy-pasted.

## Setup

```bash
npm install
npx expo start
```

Press `w` for web, or scan the QR code with the Expo Go app on your phone.

If you get a version mismatch error in Expo Go, make sure the Expo Go app on your phone is updated — it needs to match SDK 56.

## Validation Mode

I used `onTouched` for the initial validation mode with `onChange` for re-validation. This means a field only shows an error after the user taps out of it the first time (instead of yelling at them mid-typing), but once there's an error, it clears live as soon as they fix it. Felt like the best balance for actually usable forms.

## Notes

- This is an individual submission, built solo.
- There's no real backend — submitting a form just simulates a short loading delay and then resets the fields. That part of the assignment is focused on validation/UX, not building an API.
- No third-party UI library was used on purpose — everything is built with React Native's built-in `StyleSheet` and Expo's bundled icon set (`@expo/vector-icons`).
