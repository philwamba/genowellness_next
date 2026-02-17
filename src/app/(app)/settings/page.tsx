'use client'

import { useState, useEffect } from 'react'
import { AppHeader } from '@/components/layout/app-header'
import {
    FiUser,
    FiBell,
    FiShield,
    FiTrash2
} from 'react-icons/fi'
import { authApi } from '@/lib/api/client'
import { toast } from 'sonner'
import { useAuth } from '@/lib/hooks/use-auth'
import { cn } from '@/lib/utils'

export default function SettingsPage() {
    const { user, mutate } = useAuth()
    const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'notifications'>('profile')
    const [isLoading, setIsLoading] = useState(false)

    // Profile state
    // Profile state
    const [name, setName] = useState(user?.name || '')
    const [phone, setPhone] = useState(user?.phone_number || '')

    // Sync state with user data
    useEffect(() => {
        if (user) {
            setName(user.name || '')
            setPhone(user.phone_number || '')
        }
    }, [user])

    // Password state
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleUpdateProfile = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            await authApi.updateProfile({ name, phone_number: phone })
            await mutate()
            toast.success('Profile updated successfully')
        } catch (error: any) {
            toast.error(error.message || 'Failed to update profile')
        } finally {
            setIsLoading(false)
        }
    }

    const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault()
        if (newPassword !== confirmPassword) {
            toast.error('Passwords do not match')
            return
        }
        setIsLoading(true)
        try {
            await authApi.changePassword({
                current_password: currentPassword,
                password: newPassword,
                password_confirmation: confirmPassword
            })
            setCurrentPassword('')
            setNewPassword('')
            setConfirmPassword('')
            toast.success('Password changed successfully')
        } catch (error: any) {
             toast.error(error.message || 'Failed to change password')
        } finally {
            setIsLoading(false)
        }
    }

     const handleDeleteAccount = async () => {
        if (!confirm('Are you sure you want to delete your account? This action cannot be undone.')) return
        
        // TODO: Implement when backend endpoint is available
        // await authApi.deleteAccount()
        toast.error('Account deletion not yet implemented on backend')
    }

    const tabs = [
        { id: 'profile', label: 'Profile', icon: FiUser },
        { id: 'security', label: 'Security & Privacy', icon: FiShield },
        { id: 'notifications', label: 'Notifications', icon: FiBell },
    ] as const

    return (
        <div className="bg-gray-50 min-h-screen pb-20">
            <AppHeader title="Settings" showBack={false} />

            <main className="px-4 py-6">
                {/* Tabs */}
                <div className="flex overflow-x-auto gap-2 mb-6 pb-2 scrollbar-hide">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                'flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors',
                                activeTab === tab.id
                                    ? 'bg-primary text-white font-medium'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                            )}>
                            <tab.icon className="w-4 h-4" />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    {activeTab === 'profile' && (
                        <form onSubmit={handleUpdateProfile} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={user?.email || ''}
                                    disabled
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 text-gray-500 cursor-not-allowed"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={e => setPhone(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50">
                                {isLoading ? 'Saving...' : 'Save Changes'}
                            </button>
                        </form>
                    )}

                    {activeTab === 'security' && (
                        <div className="space-y-8">
                             <form onSubmit={handleChangePassword} className="space-y-6">
                                <h3 className="font-medium text-gray-900 border-b pb-2">Change Password</h3>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Current Password
                                    </label>
                                    <input
                                        type="password"
                                        value={currentPassword}
                                        onChange={e => setCurrentPassword(e.target.value)}
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        value={newPassword}
                                        onChange={e => setNewPassword(e.target.value)}
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Confirm New Password
                                    </label>
                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={e => setConfirmPassword(e.target.value)}
                                        required
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors disabled:opacity-50">
                                    {isLoading ? 'Updating...' : 'Update Password'}
                                </button>
                            </form>

                            <div className="pt-6 border-t border-gray-100">
                                <h3 className="font-medium text-red-600 mb-2">Danger Zone</h3>
                                <button
                                    onClick={handleDeleteAccount}
                                    className="flex items-center gap-2 text-red-500 hover:text-red-700 font-medium">
                                    <FiTrash2 />
                                    Delete Account
                                </button>
                                <p className="text-sm text-gray-500 mt-2">
                                    Permanently delete your account and all of your content.
                                </p>
                            </div>
                        </div>
                    )}

                    {activeTab === 'notifications' && (
                        <div className="space-y-6">
                            <div className="flex items-center justify-between py-2">
                                <div>
                                    <h4 className="font-medium text-gray-900">Push Notifications</h4>
                                    <p className="text-sm text-gray-500">Receive alerts on your device</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    {/* TODO: Add persistence for notification settings */}
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>
                            
                            <div className="flex items-center justify-between py-2">
                                <div>
                                    <h4 className="font-medium text-gray-900">Email Notifications</h4>
                                    <p className="text-sm text-gray-500">Receive updates via email</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>
                             <div className="flex items-center justify-between py-2">
                                <div>
                                    <h4 className="font-medium text-gray-900">Session Reminders</h4>
                                    <p className="text-sm text-gray-500">Get notified before sessions start</p>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}
