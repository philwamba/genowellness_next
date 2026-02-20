# GENO Customer Web App - Test Plan

## Overview
This document outlines the comprehensive test plan for the GENO Customer Web App (geno-web), a Next.js 15 application for wellness service customers.

---

## 1. Authentication Tests

### 1.1 Login
| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Valid login | Enter valid email/password, click Sign In | Redirect to `/home`, token stored |
| Firebase login | Click Google/Apple sign-in | OAuth flow completes, redirect to home |
| Invalid credentials | Enter wrong email/password | Error message displayed |
| Empty fields | Submit with empty fields | Form validation errors |

### 1.2 Registration
| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Valid registration | Fill all required fields | Account created, redirect to onboarding |
| Firebase signup | Click Google/Apple signup | Account created via OAuth |
| Duplicate email | Register with existing email | Error: "Email already exists" |
| Password requirements | Enter weak password | Validation error with requirements |

### 1.3 Onboarding
| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Complete onboarding | Fill wellness preferences | Profile updated, redirect to home |
| Skip steps | Click "Skip" on optional steps | Proceeds to next step |
| Required fields | Try to proceed without required | Validation error |

### 1.4 Forgot/Reset Password
| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Request reset | Enter email, submit | Success message, email sent |
| Reset password | Click email link, set new password | Password updated |
| Invalid token | Use expired/invalid link | Error message |

### 1.5 Email Verification
| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Verify email | Click verification link | Email verified, full access granted |
| Resend verification | Click resend button | New email sent |

---

## 2. Home/Dashboard Tests

| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Load home page | Navigate to `/home` | Personalized content loads |
| Upcoming sessions | View upcoming sessions widget | Sessions displayed with countdown |
| Wellness score | View wellness score | Score and breakdown shown |
| Quick actions | Use quick action buttons | Navigate to correct pages |
| Featured providers | View featured providers | Provider cards displayed |

---

## 3. Provider Discovery Tests

### 3.1 Search
| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Search by name | Enter provider name | Matching results shown |
| Search by service | Enter service type | Relevant providers listed |
| Filter by rating | Apply rating filter | Results filtered correctly |
| Filter by price | Set price range | Results within range |
| Filter by availability | Select available dates | Only available providers shown |
| Sort results | Change sort order | Results reordered |

### 3.2 Provider Profile
| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| View profile | Click on provider | Profile page loads |
| View services | Check services tab | Provider's services listed |
| View reviews | Check reviews tab | Reviews with ratings shown |
| View availability | Check availability | Calendar with slots shown |
| Contact provider | Click message button | Message modal opens |

---

## 4. Services Tests

### 4.1 Browse Services
| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| View all services | Navigate to `/services` | Service categories displayed |
| Filter by category | Select wellness category | Filtered services shown |
| Service details | Click on service | Details page with providers |

### 4.2 Service Page
| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| View service info | Open service page | Description, benefits shown |
| See providers | View providers offering service | Provider list displayed |
| Book service | Click "Book Now" | Redirected to booking flow |

---

## 5. Booking Tests

### 5.1 Booking Flow
| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Select provider | Choose provider for service | Provider selected |
| Select date | Pick available date | Date selected, time slots shown |
| Select time | Pick time slot | Time confirmed |
| Add notes | Enter booking notes | Notes saved |
| Review booking | View summary | All details correct |
| Confirm booking | Submit booking | Booking created, confirmation shown |

### 5.2 Payment
| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| M-Pesa payment | Select M-Pesa, enter phone | STK push sent |
| Card payment | Enter card details | Stripe payment processed |
| Payment success | Complete payment | Booking confirmed |
| Payment failure | Payment fails | Error message, retry option |

### 5.3 Booking Management
| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| View bookings | Navigate to `/bookings` | All bookings listed |
| Upcoming filter | Filter by upcoming | Future bookings shown |
| Past filter | Filter by past | Historical bookings shown |
| Cancel booking | Cancel pending booking | Status updated, refund initiated |
| Reschedule | Request reschedule | New time selected |

---

## 6. Sessions Tests

### 6.1 Session List
| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| View sessions | Navigate to `/sessions` | Sessions listed |
| Filter by status | Apply status filter | Filtered results |
| Session countdown | View upcoming session | Time until session shown |

### 6.2 Video Session
| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Join session | Click "Join" when available | Video room opens |
| Camera/mic controls | Toggle camera/mic | Settings applied |
| Leave session | Click leave | Session exited gracefully |
| Session ended | Provider ends session | Return to session summary |

### 6.3 Post-Session
| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Rate session | Submit rating (1-5 stars) | Rating saved |
| Write review | Add review text | Review submitted |
| View notes | Check provider notes | Notes from session shown |

---

## 7. Wellness Module Tests

### 7.1 Wellness Dashboard
| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Overall score | Navigate to `/wellness` | Wellness score displayed |
| Dimension scores | View 6 dimensions | Scores for each shown |
| Recommended actions | View suggestions | Personalized tips displayed |

### 7.2 Mood Tracking
| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Log mood | Navigate to `/wellness/mood` | Mood selector shown |
| Select mood | Choose mood level | Mood recorded |
| Add notes | Enter mood notes | Notes saved |
| View history | Check mood history | Timeline displayed |
| Mood trends | View trends chart | Chart renders correctly |

### 7.3 Journal
| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Create entry | Navigate to `/wellness/journal/new` | Editor opens |
| Save entry | Write and save | Entry saved |
| View entries | Check journal list | All entries shown |
| Edit entry | Modify existing entry | Changes saved |
| Delete entry | Remove entry | Entry deleted |

### 7.4 Goals
| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Create goal | Navigate to `/wellness/goals/new` | Goal form shown |
| Set target | Define goal metrics | Goal created |
| Track progress | Update goal progress | Progress saved |
| Complete goal | Mark as complete | Status updated |
| View all goals | Check goals list | Active and completed shown |

### 7.5 Wellness Dimensions
| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Physical wellness | Navigate to `/wellness/physical` | Physical metrics shown |
| Mental wellness | Navigate to `/wellness/mental` | Mental health content |
| Social wellness | Navigate to `/wellness/social` | Social health resources |
| Spiritual wellness | Navigate to `/wellness/spiritual` | Spiritual content |
| Occupational wellness | Navigate to `/wellness/occupational` | Work-life content |
| Financial wellness | Navigate to `/wellness/financial` | Financial health tools |

### 7.6 Wellness Tips
| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| View tips | Browse wellness tips | Tips displayed |
| Filter by category | Select category | Filtered tips shown |
| Read tip detail | Click on tip | Full content displayed |
| Save tip | Bookmark tip | Saved to favorites |

---

## 8. Profile Tests

| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| View profile | Navigate to `/profile` | Profile information shown |
| Edit info | Update name, bio | Changes saved |
| Upload avatar | Select image | Avatar updated |
| View stats | Check wellness stats | Statistics displayed |
| View achievements | Check badges/points | Gamification data shown |

---

## 9. Settings Tests

| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Notification settings | Toggle preferences | Settings saved |
| Privacy settings | Adjust privacy options | Changes applied |
| Language | Change language | UI updates |
| Theme | Toggle dark/light mode | Theme changes |
| Account | View account info | Details displayed |
| Delete account | Request deletion | Process initiated |

---

## 10. Notifications Tests

| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| View notifications | Navigate to `/notifications` | List displayed |
| Mark as read | Click notification | Status updated |
| Notification types | Receive various types | Appropriate icons/styling |
| Real-time updates | Receive new notification | Badge/list updates |

---

## 11. Guest Pages Tests

| Test Case | Steps | Expected Result |
|-----------|-------|-----------------|
| Landing page | Visit `/` | Homepage loads |
| About page | Visit `/about` | Content displayed |
| FAQs | Visit `/faqs` | Questions/answers shown |
| Privacy policy | Visit `/privacy` | Policy content shown |
| Contact | Visit `/contact` | Contact form works |
| Corporate | Visit `/corporate` | B2B info displayed |
| Blog | Visit `/blog` | Articles listed |

---

## 12. Responsive Design Tests

| Breakpoint | Test |
|------------|------|
| Mobile (< 640px) | Bottom navigation, mobile-first layout |
| Tablet (640-1024px) | Responsive grid, touch-friendly |
| Desktop (> 1024px) | Sidebar navigation, optimal layout |

---

## 13. Accessibility Tests

| Criteria | Test |
|----------|------|
| Keyboard navigation | Tab through all interactive elements |
| Screen reader | Test with VoiceOver/NVDA |
| Color contrast | Verify WCAG AA compliance |
| Focus indicators | Visible focus states |
| Alt text | Images have descriptions |

---

## 14. Error Handling Tests

| Scenario | Expected Behavior |
|----------|-------------------|
| API timeout | Loading state, then error message |
| 401 Unauthorized | Redirect to login |
| 403 Forbidden | Access denied message |
| 404 Not Found | 404 page shown |
| 500 Server Error | Error page with retry |
| Network offline | Offline indicator |

---

## 15. Performance Tests

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Bundle size | < 200KB gzipped |

---

## 16. Integration Tests

### 16.1 Payment Integration
| Test | Steps | Expected |
|------|-------|----------|
| M-Pesa integration | Complete M-Pesa payment | Transaction successful |
| Stripe integration | Complete card payment | Transaction successful |
| Refund process | Cancel paid booking | Refund processed |

### 16.2 Video Integration
| Test | Steps | Expected |
|------|-------|----------|
| Video provider connection | Join session | Video loads |
| Audio quality | Test audio | Clear audio |
| Screen sharing | Share screen | Screen visible |

---

## Test Environment

### Prerequisites
- Node.js 18+
- Access to staging API
- Test user accounts (customer role)
- M-Pesa sandbox credentials
- Stripe test mode

### Test Data
- Customer account with:
  - Completed onboarding
  - Booking history
  - Wellness data (mood, journal, goals)
  - Session history
  - Points/achievements

### Running Tests
```bash
# Unit tests
npm run test

# E2E tests (if configured)
npm run test:e2e

# Manual testing
npm run dev
```

---

## Security Tests

| Test | Description |
|------|-------------|
| XSS prevention | Input sanitization |
| CSRF protection | Token validation |
| Auth token security | Secure storage |
| API security | Proper authorization checks |
| Data encryption | Sensitive data protected |

---

## Sign-off

| Role | Name | Date | Signature |
|------|------|------|-----------|
| QA Lead | | | |
| Dev Lead | | | |
| Product Owner | | | |
