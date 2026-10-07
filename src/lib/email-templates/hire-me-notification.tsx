import * as React from 'react'
import { Body, Container, Head, Heading, Hr, Html, Preview, Section, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props { name?: string; email?: string; message?: string }

const Email = ({ name = 'Someone', email = '', message = '' }: Props) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New Hire Me message from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>SWETHA PANDALA · PORTFOLIO</Text>
        <Heading style={h1}>New message from {name}</Heading>
        <Text style={label}>Email</Text>
        <Text style={value}>{email}</Text>
        <Hr style={hr} />
        <Text style={label}>Message</Text>
        <Section style={box}><Text style={msg}>{message}</Text></Section>
        <Text style={foot}>Reply to this email to respond directly to {name}.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (d: Record<string, any>) => `New Hire Me message from ${d.name ?? 'your portfolio'}`,
  displayName: 'Hire Me notification',
  to: 'swethapandala799@gmail.com',
  previewData: { name: 'Jane Doe', email: 'jane@example.com', message: 'Hi Swetha, I would love to talk about a role.' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '28px 25px', maxWidth: '560px' }
const brand = { fontSize: '11px', letterSpacing: '2px', color: '#7a5fc4', margin: '0 0 12px' }
const h1 = { fontSize: '22px', color: '#0b080c', margin: '0 0 20px' }
const label = { fontSize: '11px', textTransform: 'uppercase' as const, letterSpacing: '1px', color: '#888', margin: '0 0 4px' }
const value = { fontSize: '15px', color: '#0b080c', margin: '0 0 16px' }
const hr = { borderColor: '#eee', margin: '16px 0' }
const box = { backgroundColor: '#f6f2ff', borderLeft: '3px solid #c2a4ff', padding: '4px 16px', borderRadius: '6px' }
const msg = { fontSize: '15px', color: '#222', lineHeight: '1.6', whiteSpace: 'pre-wrap' as const }
const foot = { fontSize: '12px', color: '#999', marginTop: '24px' }
