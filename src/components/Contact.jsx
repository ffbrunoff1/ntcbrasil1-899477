<motion.div
          className="grid lg:grid-cols-2 gap-12 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Entre em Contato</h2>
            <p className="text-lg text-slate-600 mb-8">
              Pronto para iniciar seu projeto? Preencha o formulário ou utilize um de nossos canais de atendimento. Nossa equipe está pronta para ajudar.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-brand-blue/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark">Telefone</h3>
                  <a href="tel:+5544991040774" className="text-slate-600 hover:text-brand-blue">+55 44 99104-0774</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-brand-blue/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark">E-mail</h3>
                  <a href="mailto:ffbrunoff@yahoo.com.br" className="text-slate-600 hover:text-brand-blue">ffbrunoff@yahoo.com.br</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-brand-blue/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-dark">Endereço</h3>
                  <p className="text-slate-600">Padre Lebret 801, G05 Bloco 03</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className="bg-white p-8 rounded-xl shadow-2xl" variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Nome Completo</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">E-mail</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Sua Mensagem</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition"></textarea>
              </div>
              <div>
                <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center px-8 py-4 bg-brand-blue text-white font-bold rounded-lg shadow-lg hover:bg-blue-500 transition-all duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </div>
              {submitSuccess && <p className="text-green-600 font-semibold text-center">Mensagem enviada com sucesso! Entraremos em contato em breve.</p>}
              {submitError && <p className="text-red-600 font-semibold text-center">Erro: {submitError}</p>}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}