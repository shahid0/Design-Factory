
# Style Implementation QA Checklist

When creating a new `StyleCartridge`, ensure the CSS (`injectCss`) targets **ALL** of the following anatomical zones in `StyleMannequin.tsx`.

## 1. Global & Layout
- [ ] `ds-page-root`: Set background color.
- [ ] `ds-hero`: Typography overrides (headings, gradients).
- [ ] `ds-hero-title`: Text shadows, fonts.
- [ ] `ds-deco-layer`: Background patterns (grids, blobs, grain).

## 2. Navigation
- [ ] `ds-navbar`: Background, border, or floating shadow.
- [ ] `ds-logo`: Font weight, letter spacing.
- [ ] `ds-nav-links`: Hover states for links.
- [ ] `ds-btn-secondary` (in Nav): Small button styling.

## 3. Buttons & Interactables
- [ ] `ds-btn-primary`: The main call to action. Needs:
    - [ ] Normal State
    - [ ] Hover State (Transform/Shadow)
    - [ ] Active State (Click)
- [ ] `ds-btn-ghost`: Secondary actions.
- [ ] `ds-badge`: Small pill labels (Hero, Status).

## 4. Stats & Data
- [ ] `ds-stats`: The row of 4 numbers.
    - [ ] Container background (transparent or solid?)
    - [ ] Individual item styling (borders/cards?).
- [ ] `ds-table-container`: The main data table.
    - [ ] Header row styling.
    - [ ] Row hover effects.
    - [ ] Status pill styling.

## 5. Components (Cards & Inputs)
- [ ] `ds-panel`: The 3 feature cards in the grid.
- [ ] `ds-input`: Text input field.
    - [ ] Placeholder color.
    - [ ] Focus state (Ring/Shadow).
- [ ] `ds-input-decorator`: The icon/dot inside the input.

## 6. Pricing Section
- [ ] `ds-card`: The pricing plans.
    - [ ] Differentiate the "Popular" (middle) card.
    - [ ] Style the "Select Plan" buttons inside.

## 7. Footer
- [ ] `ds-footer`: Background color and top border/shadow.
- [ ] Footer links hover states.

---

**Tip:** Use `!important` in `injectCss` only when necessary to override default utility classes from the base `kaolin` theme if specificitity wars occur.
