import { ChangeEvent, type FormEvent, useState } from 'react'
import { type Product } from '@src/shared/api'

import styles from './AddProductForm.module.scss'
import { Loader } from '@ui/loader'

export interface AddProductFormProps {
  loading?: boolean
  onSubmit: (product: Product) => void
}

export const AddProductForm = ({ loading, onSubmit }: AddProductFormProps) => {
  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<number>()
  const [image, setImage] = useState<string>('')
  const [errors, setErrors] = useState<Partial<Record<keyof Product, string>>>({})

  const validateName = () => {
    if (!name) {
      setErrors(errors => ({ ...errors, name: 'Name not defined' }))
    } else if (name.length < 2) {
      setErrors(errors => ({ ...errors, name: 'Name should be no less 3 chars' }))
    } else {
      setErrors(errors => ({ ...errors, name: undefined }))

      return true
    }

    return false
  }

  const onChangeName = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setName(target.value)
    if (errors.name) validateName()
  }

  const validatePrice = () => {
    if (!price) {
      setErrors(errors => ({ ...errors, price: 'Price should be more than 0' }))
    } else {
      setErrors(errors => ({ ...errors, price: undefined }))

      return true
    }

    return false
  }

  const onChangePrice = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setPrice(Math.max(parseInt(target.value, 10) || 0, 0))
    if (errors.price) validatePrice()
  }

  const convertBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)

      fileReader.onload = () => {
        resolve(String(fileReader.result))
      }

      fileReader.onerror = error => {
        reject(error)
      }
    })
  }

  const validateImage = (_image = image) => {
    if (!_image) {
      setErrors(errors => ({ ...errors, image: 'Image not defined' }))
    } else {
      setErrors(errors => ({ ...errors, image: undefined }))

      return true
    }

    return false
  }

  const onChangeImage = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setImage(target.value)
    console.log('onChangeImage', target.value)
    if (validateImage(target.value)) {
      const [file] = target.files ?? []
      void convertBase64(file).then(setImage)
    }
  }

  const validate = () => {
    return [validateName(), validatePrice(), validateImage()].every(Boolean)
  }

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validate() && price) {
      onSubmit({ name, price, image })
    }
  }

  return (
    <div className={styles.wrapper}>
      <h4>Add new product</h4>
      <form className={styles.addProductForm} onSubmit={onSubmitHandler}>
        <div>
          <label>
            name: <input value={name} onChange={onChangeName} onBlur={validateName} />
          </label>
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>
        <div>
          <label>
            price: <input type="number" step={100} value={`${price}`} onChange={onChangePrice} onBlur={validatePrice} />
          </label>
          {errors.price && <p className={styles.error}>{errors.price}</p>}
        </div>
        <div>
          <label>
            image: <input type="file" onChange={onChangeImage} />
            {image && (
              <div className={styles.preview}>
                <img alt={name} src={image} />
              </div>
            )}
          </label>
          {errors.image && <p className={styles.error}>{errors.image}</p>}
        </div>
        <div>
          <button disabled={loading} type="submit">
            Add
          </button>
          {loading && <Loader />}
        </div>
      </form>
    </div>
  )
}
