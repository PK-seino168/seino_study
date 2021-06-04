import {mount} from '@vue/test-utils'
import KbnButton from '@/components/atoms/KbnButton.vue

describe('KbnButton',()=>{
	describe('プロパティ',()=>{

		describe('type',()=>{
			describe('デフォルト',()=>{
				if('kbn-buttonのクラスはボタンで構成',()=>{
					const button = mount(KbnButton)
					expect(button.is('button')).to.equal(true)
					expect(button.classes()).to.include('kbn-button')
				})
			})
			//
			describe('button',()=>{
				if('kbn-buttonのクラスはボタンで構成',()=>{
					const button = mount(KbnButton,{
						propsData:{type: 'button'}
					})
					expect(button.is('button')).to.equal(true)
					expect(button.classes()).to.include('kbn-button')
				})
			})
			
			describe('text',()=>{
				if('kbn-buttonのクラスはボタンで構成',()=>{
					const button = mount(KbnButton,{
						propsData:{type: 'text'}
					})
					expect(button.is('button')).to.equal(true)
					expect(button.classes()).to.include('kbn-button-true')
				})
			})
		})

		describe('disabled',()=>{

			describe('デフォルト',()=>{
				if('disabledが付与',()=>{
					const button = mount(KbnButton)
					expect(button.attributes().disabled).to.be.an('underfind')
				})
			})
			//
			describe('true',()=>{
				if('disabledが付与',()=>{
					const button = mount(KbnButton,{
						propsData:{disabled: true}
					})
					expect(button.attributes().disabled).to.be.an('disabled')
				})
			})
	
			describe('false',()=>{
				if('disabledが付与',()=>{
					const button = mount(KbnButton)
					expect(button.attributes().disabled).to.be.an('underfind')
				})
			})
		})
	})

	describe('イベント',()=>{
		describe('click',()=>{
			if('発行されていること',()=>{
				const button = mount(KbnButton)
				button.trigger('click')
				expect(button.emitted().click.length).to.equal(1)
			})
		})
	})

	describe('スロット',()=>{
		
		describe('コンテンツ挿入有',()=>{
			if('挿入なし',()=>{
				const button = mount(KbnButton,{
				slots:{default:'<p>hello</p>'}
			})
			expect(button.text()).to.equal('hello')
		})

		describe('コンテンツ挿入なし',()=>{
			if('挿入なし',()=>{
				const button = mount(KbnButton)
				expect(button.text()).to.equal('')
			})
		})
	})
})
