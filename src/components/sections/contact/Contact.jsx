import { RevealOnScroll } from '../../RevealOnScroll'

export default function Contact() {
  return (
    <section id='contact'
        className="min-h-screen flex justify-center items-center py-20"
    >
        <RevealOnScroll>
            <div className='px-4 w-150'>
                <h2 className='text-3xl mb-8 font-bold bg-gradient-to-r from-blue-500  to-cyan-400 bg-clip-text text-center text-transparent' >Get in touch</h2>
                <form className='space-y-6' >
                    <input 
                        type="text" 
                        className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' 
                        placeholder='Name'
                        name='name'
                        required
                        id='name'
                    />
                                  <input 
                        type="email" 
                        className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' 
                        placeholder='example@example.com'
                        name='email'
                        required
                        id='email'
                    />
                                                      <textarea
                        rows={5} 
                        type="text" 
                        className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5' 
                        placeholder='Message'
                        name='message'
                        required
                        id='message'
                    />

                    <button className='w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(58,130,246,0.4)]' type='submit' >
                        Send
                    </button>
                </form>
            </div>
        </RevealOnScroll>
    </section>
  )
}
