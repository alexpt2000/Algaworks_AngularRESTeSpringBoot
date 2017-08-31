package com.example.algamoney.api.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import com.example.algamoney.api.model.Lancamento;
import com.example.algamoney.api.model.Pessoa;
import com.example.algamoney.api.repository.LancamentoRepository;
import com.example.algamoney.api.repository.PessoaRepository;

@Service
public class LancamentoService {

	@Autowired
	private LancamentoRepository lancamentoRepository;

	public Lancamento atualizar(Long codigo, Lancamento lancamento) {
		Lancamento lancamentoSalva = buscarLancamentoPeloCodigo(codigo);

		BeanUtils.copyProperties(lancamento, lancamentoSalva, "codigo");
		return lancamentoRepository.save(lancamentoSalva);
	}

//	public void atualizarPropriedadeAtivo(Long codigo, Boolean ativo) {
//		Pessoa lancamentoSalva = buscarLancamentoPeloCodigo(codigo);
//		lancamentoSalva.setAtivo(ativo);
//		lancamentoRepository.save(lancamentoSalva);
//	}

	private Lancamento buscarLancamentoPeloCodigo(Long codigo) {
		Lancamento lancamentoSalva = lancamentoRepository.findOne(codigo);

		if (lancamentoSalva == null) {
			throw new EmptyResultDataAccessException(1);
		}
		return lancamentoSalva;
	}

}
