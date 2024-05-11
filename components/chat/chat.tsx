'use client';

import { useChat } from 'ai/react';
import Markdown from 'react-markdown';

import TopNav from '../home/topnav';
import AiChatIcon from '../icons/aiChatIcon';
import HorizontalLogo from '../icons/logos/horizontalLogo';

export default function ChatComponent() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
    useChat({
      api: 'api/chat',
    });
  return (
    <div className="px-10 pt-10">
      <TopNav />
      <div className="relative h-[88vh] w-full overflow-scroll">
        <div className="py-10 lg:py-14">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 px-4 text-center sm:px-6 lg:px-8">
            <HorizontalLogo />

            <h1 className="text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl">
              Welcome to Seto Data Chat
            </h1>
          </div>

          <ul className="mt-16 space-y-5">
            <li className="mx-auto flex max-w-4xl gap-x-2 px-4 py-2 sm:gap-x-4 sm:px-6 lg:px-8">
              <AiChatIcon />

              <div className="space-y-3">
                Introducing the Nepal Statistics Exploration Bot! This AI
                assistant offers detailed insights into Nepal&apos;s diverse sectors,
                including education, healthcare, and more. From analyzing
                university demographics to examining TB control efforts, this
                bot provides comprehensive data-driven analyses to aid in
                decision-making and policy formulation. Whether you&apos;re
                interested in gender disparities in education or vaccination
                coverage across provinces, this bot is your go-to source for
                valuable statistics and insights on Nepal&apos;s socio-economic
                landscape.
              </div>
            </li>
            {messages.map((message) => (
              <div key={message.id}>
                {message.role === 'user' && (
                  <li className="py-2 sm:py-4">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                      <div className="flex max-w-2xl gap-x-2 sm:gap-x-4">
                        <span className="inline-flex size-[38px] flex-shrink-0 items-center justify-center rounded-full bg-gray-600">
                          <span className="text-sm font-medium leading-none text-white">
                            AZ
                          </span>
                        </span>

                        <div className="mt-2 grow space-y-3">
                          <p className="text-gray-800 dark:text-neutral-200">
                            {message.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                )}
                {message.role !== 'user' && (
                  <li className="mx-auto flex max-w-4xl gap-x-2 px-4 py-2 sm:gap-x-4 sm:px-6 lg:px-8">
                    <AiChatIcon />

                    <div className="space-y-3">
                      <Markdown>{message.content}</Markdown>
                    </div>
                  </li>
                )}
              </div>
            ))}
            {isLoading && (
              <li className="mx-auto flex max-w-4xl gap-x-2 px-4 py-2 sm:gap-x-4 sm:px-6 lg:px-8">
                <AiChatIcon />

                <div className="space-y-3">Please wait ...</div>
              </li>
            )}
          </ul>
        </div>

        <footer className="sticky bottom-0 z-10 w-full border-t border-gray-200 bg-white pb-3 pt-2 dark:border-neutral-700 dark:bg-neutral-900 sm:pb-6 sm:pt-4">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="mb-3 flex items-center justify-between">
              {isLoading && (
                <button
                  onClick={stop}
                  type="button"
                  className="inline-flex items-center gap-x-2 rounded-lg border border-black bg-white px-2 py-1.5 text-xs font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
                >
                  <svg
                    className="size-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5z" />
                  </svg>
                  Stop generating
                </button>
              )}
            </div>

            <div className="relative">
              <textarea
                onKeyDown={(e) => {
                  if (e.key !== 'Enter') return;
                  handleSubmit(e as any);
                }}
                value={input}
                onChange={handleInputChange}
                className="block w-full rounded-lg border-gray-200 p-4 pb-12 text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="Ask me anything..."
              ></textarea>

              <div className="absolute inset-x-px bottom-px rounded-b-md bg-white p-2 dark:bg-neutral-900">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="inline-flex size-8 flex-shrink-0 items-center justify-center rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:text-blue-500"
                    >
                      <svg
                        className="size-4 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <line x1="9" x2="15" y1="15" y2="9" />
                      </svg>
                    </button>

                    <button
                      type="button"
                      className="inline-flex size-8 flex-shrink-0 items-center justify-center rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:text-blue-500"
                    >
                      <svg
                        className="size-4 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex items-center gap-x-1">
                    <button
                      type="button"
                      className="inline-flex size-8 flex-shrink-0 items-center justify-center rounded-lg text-gray-500 hover:text-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-neutral-500 dark:hover:text-blue-500"
                    >
                      <svg
                        className="size-4 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                        <line x1="12" x2="12" y1="19" y2="22" />
                      </svg>
                    </button>

                    {/* submit button */}
                    <button
                      onClick={(e) => handleSubmit(e as any, { data: {} })}
                      type="button"
                      className="inline-flex size-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <svg
                        className="size-3.5 flex-shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
