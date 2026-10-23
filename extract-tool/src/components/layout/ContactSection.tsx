'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageSquare, Send } from 'lucide-react';
import { TextInput, TextArea, SubmitButton } from '../ui';

export interface ContactSectionProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function ContactSection({
  isOpen,
  onClose,
  className = '',
}: ContactSectionProps) {
  const [subject, setSubject] = useState('Report a bug');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) {
      setError('Please provide a valid email address.');
      return;
    }
    if (!message.trim()) {
      setError('Please describe your feedback or report.');
      return;
    }
    setError('');
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setMessage('');
    setError('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Modal Dialog Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className={`relative w-full max-w-md bg-white rounded-2xl border border-gray-200 shadow-2xl p-6 md:p-8 z-10 ${className}`}
            role="dialog"
            aria-modal="true"
            aria-label="Feedback and Extraction Request"
          >
            {/* Close Icon Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute top-5 right-5 w-8 h-8 rounded-lg border border-gray-200 hover:bg-gray-100 flex items-center justify-center text-gray-400 hover:text-gray-900 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Header */}
                <div className="space-y-1 pr-8">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-red-200 bg-red-50 text-[11px] font-mono text-[#EA4335] font-semibold">
                    <MessageSquare className="w-3 h-3" />
                    <span>FEEDBACK &amp; SUPPORT</span>
                  </div>
                  <h3 className="text-xl font-bold font-display text-[#111827]">
                    Send Feedback or Report Issue
                  </h3>
                  <p className="text-xs text-gray-500 font-sans">
                    Have a custom website extraction request or noticed a rendering issue? Let us know.
                  </p>
                </div>

                {/* Error Banner */}
                {error && (
                  <div className="p-2.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-600 font-sans">
                    {error}
                  </div>
                )}

                {/* Subject Selector */}
                <div className="space-y-1.5 text-left">
                  <label className="text-xs font-semibold text-gray-700 font-sans">
                    Topic
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Report a bug', 'Feature request', 'Custom site ripping', 'Other'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setSubject(item)}
                        className={`py-2 px-3 rounded-xl border text-xs font-mono transition-all text-left ${
                          subject === item
                            ? 'border-[#EA4335] bg-red-50/50 text-[#111827] font-semibold'
                            : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Email Field */}
                <TextInput
                  label="Your Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                />

                {/* Message Field */}
                <TextArea
                  label="Description / Target Website URL"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what happened or enter website URL..."
                  rows={3}
                  required
                />

                {/* Actions */}
                <div className="pt-2 flex items-center justify-end gap-2.5">
                  <button
                    type="button"
                    onClick={onClose}
                    className="h-11 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 text-xs font-semibold text-gray-600 transition-colors"
                  >
                    Cancel
                  </button>
                  <SubmitButton onClick={() => handleSubmit({ preventDefault: () => {} } as React.FormEvent)}>
                    <span className="flex items-center gap-1.5">
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </span>
                  </SubmitButton>
                </div>
              </form>
            ) : (
              /* Confirmation Success State */
              <div className="py-6 flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-bold font-display text-gray-900">
                    Message Sent Successfully
                  </h4>
                  <p className="text-xs text-gray-500 font-sans max-w-xs">
                    Thank you for your feedback. We will review your extraction report shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="h-10 px-6 rounded-xl bg-[#111827] hover:bg-black text-white text-xs font-semibold font-sans transition-colors"
                >
                  Done
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
