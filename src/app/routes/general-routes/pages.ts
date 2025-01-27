import { lazy } from 'react'

export const AllPages = lazy(() => import('@pages/all-pages'))
export const AllStudentsPage = lazy(() => import('@pages/all-students'))
export const AllTeachersPage = lazy(() => import('@pages/all-teachers'))
export const AllStaff = lazy(() => import('@pages/all-staff'))
export const CantAccessPage = lazy(() => import('@pages/cant-access'))
export const ChatPage = lazy(() => import('@pages/chat'))
export const ElectronicInteractionAgreementPage = lazy(() => import('@pages/electronic-interaction-agreement'))
export const FeedbackPage = lazy(() => import('@pages/feedback'))
export const ForgotPasswordPage = lazy(() => import('@pages/forgot-password'))
export const AlertsPage = lazy(() => import('@pages/alerts'))
export const Home = lazy(() => import('@pages/home'))
export const InstructionsPage = lazy(() => import('@pages/instructions'))
export const PaymentsPage = lazy(() => import('@pages/payments'))
export const ProfilePage = lazy(() => import('@pages/profile'))
export const SchedulePage = lazy(() => import('@pages/schedule'))
export const ScheduleCurrent = lazy(() => import('@pages/schedule/ui/current-schedule'))
export const ScheduleSemestr = lazy(() => import('@pages/schedule/ui/semestr-schedule'))
export const ScheduleSession = lazy(() => import('@pages/schedule/ui/session-schedule'))
export const ScheduleRetake = lazy(() => import('@pages/schedule/ui/retake-schedule'))

export const DecreisDirectivesPage = lazy(() => import('@pages/decreis-directives'))
export const GetYourLoginPage = lazy(() => import('@pages/get-your-login'))
export const MemoFreshmenPage = lazy(() => import('@pages/memo-freshmen'))
export const MemoTeacherPage = lazy(() => import('@pages/memo-teacher'))
export const MedicalCertificate = lazy(() => import('@pages/medical-certificate'))
export const Onboarding = lazy(() => import('@pages/onboarding'))
export const LkNotificationsPage = lazy(() => import('@pages/lk-notifications'))
