/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package trabalhoPraticoDSW.trabalhoPraticoDSW.models.persistencia;

import org.springframework.data.jpa.repository.JpaRepository;
import trabalhoPraticoDSW.trabalhoPraticoDSW.models.Criterios;

/**
 *
 * @author camila
 */
public interface CriteriosRepository extends JpaRepository<Criterios, Long>{
    
}
