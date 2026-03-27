import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, MapPin, Search } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import { useTranslation } from 'react-i18next';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export function AIAssistant() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string; urls?: string[] }[]>([
    { role: 'model', text: t('ai.welcome') }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const isMapQuery = userMessage.toLowerCase().includes('map') || userMessage.toLowerCase().includes('direction') || userMessage.toLowerCase().includes('where') || userMessage.toLowerCase().includes('location');
      
      const tools: any[] = [];
      if (isMapQuery) {
        tools.push({ googleMaps: {} });
      } else {
        tools.push({ googleSearch: {} });
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `You are a helpful AI assistant for Infinite M&E (EPC), an integrated Mechanical & Electrical engineering partner based in Johor Bahru, Malaysia. 
        Answer the user's question. If they ask for directions or location, use the googleMaps tool. If they ask about industry news or general info, use the googleSearch tool.
        User question: ${userMessage}`,
        config: {
          tools: tools,
          toolConfig: { includeServerSideToolInvocations: true },
        }
      });

      let urls: string[] = [];
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      if (chunks) {
        chunks.forEach((chunk: any) => {
          if (chunk.web?.uri) urls.push(chunk.web.uri);
          if (chunk.maps?.uri) urls.push(chunk.maps.uri);
        });
      }

      setMessages(prev => [...prev, { role: 'model', text: response.text || t('ai.noResponse'), urls }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: t('ai.error') }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          'fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-premium transition-all duration-300 hover:scale-110 hover:bg-primary/90',
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        )}
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          'fixed bottom-4 right-4 z-50 flex w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-3xl bg-white shadow-premium transition-all duration-500 ease-out sm:bottom-6 sm:right-6 sm:w-[400px]',
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
        )}
        style={{ maxHeight: 'calc(100vh - 2rem)' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-primary p-4 text-white">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
              <MessageSquare className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-serif font-semibold">{t('ai.title')}</h3>
              <p className="text-xs text-white/70">{t('ai.poweredBy')}</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-2 transition-colors hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex h-[400px] flex-col overflow-y-auto p-4 bg-background">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={cn(
                'mb-4 flex max-w-[85%] flex-col',
                msg.role === 'user' ? 'self-end items-end' : 'self-start items-start'
              )}
            >
              <div
                className={cn(
                  'rounded-2xl px-4 py-3 text-sm shadow-sm',
                  msg.role === 'user'
                    ? 'bg-primary text-white rounded-br-sm'
                    : 'bg-white text-foreground rounded-bl-sm border border-muted'
                )}
              >
                {msg.role === 'model' ? (
                  <div className="prose prose-sm prose-p:leading-relaxed prose-a:text-primary max-w-none">
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </div>
                ) : (
                  msg.text
                )}
              </div>
              
              {msg.urls && msg.urls.length > 0 && (
                <div className="mt-2 flex flex-col gap-1 w-full">
                  <span className="text-xs font-semibold text-muted-foreground">{t('ai.sources')}</span>
                  {msg.urls.map((url, i) => (
                    <a
                      key={i}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-primary hover:underline truncate"
                    >
                      {url.includes('maps') ? <MapPin className="h-3 w-3 shrink-0" /> : <Search className="h-3 w-3 shrink-0" />}
                      <span className="truncate">{url}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="self-start mb-4 flex max-w-[85%] flex-col items-start">
              <div className="rounded-2xl rounded-bl-sm border border-muted bg-white px-4 py-3 shadow-sm">
                <div className="flex gap-1">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-primary/40" style={{ animationDelay: '0ms' }} />
                  <div className="h-2 w-2 animate-bounce rounded-full bg-primary/60" style={{ animationDelay: '150ms' }} />
                  <div className="h-2 w-2 animate-bounce rounded-full bg-primary/80" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-muted bg-white p-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t('ai.placeholder')}
            className="flex-1 rounded-full border border-muted bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-all hover:bg-primary/90 disabled:opacity-50 disabled:hover:bg-primary"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </>
  );
}
