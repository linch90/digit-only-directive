# DigitOnlyDirective

A angular directive to allow digit only input.

**Module**

```typescript
import { DigitOnlyDirectiveModule } from "@linch90/digit-only-directive";
```

# Example

[Stackblitz](https://stackblitz.com/edit/digit-only)

```html
<input
  type="text"
  class="form-control"
  id="digitOnlyInput"
  digitOnly
  [decimal]="true"
/>
```

# API

**Selector**

#### _input[digitOnly],textarea[digitOnly]_

| Name             | Description                                                     |
| ---------------- | --------------------------------------------------------------- |
| decimal          | default: `false`, if support decimal                            |
| decimalSeparator | `'.'`, the separator of decimal                                 |
| min              | `-Infinity`, the min value that allowed                         |
| max              | `Infinity`, the max value that allowed                          |
| pattern          | `string \| RegExp \| undefined`, the digit pattern that allowed |
